<?php

	$Register = &Register::getInstance();
	$Message = $Register->get(VAR_MESSAGE);

	$productID = isset($_GET['productID'])?intval($_GET['productID']):0;

	if (isset($_POST["add2cart_x"]) || isset($_POST["add2cart"])) { //add product to cart

		$variants=array();
		foreach($_POST as $key => $val ){
			
			if(!strstr($key, 'option_'))continue;
			$variants[] = $val;
		}
		
		$qty = max(1,isset($_POST['product_qty'])?intval($_POST['product_qty']):1);
		
		$res = cartAddToCart($productID, $variants, $qty );
		
		$Register = &Register::getInstance();

		if ($res === false) {
			RedirectSQ('?ukey=product_not_found&view=&external=');
		} elseif($res === 0){
			RedirectSQ('?ukey=product_out_of_stock&view=&external=');
		} else {
			RedirectSQ('?ukey=cart&view=&external=');
		}
	}

	//product detailed information view
	//vote for a product
	if (isset($_GET["vote"]) && isset($productID)) {
		if (isset($_SESSION["vote_completed"][ $productID ]) && !$_SESSION["vote_completed"][ $productID ] && isset($_GET["mark"]) && strlen($_GET["mark"])>0) {
			$mark = (float) $_GET["mark"];

			if ($mark>0 && $mark<=5) {
				db_query("UPDATE ".PRODUCTS_TABLE." SET customers_rating=(customers_rating*customer_votes+'".$mark."')/(customer_votes+1), customer_votes=customer_votes+1 WHERE productID='".$productID."'") or die (db_error());
			}
		}
		$_SESSION["vote_completed"][ $productID ] = 1;
		RedirectSQ('vote=&mark=', '', true);

	} elseif(isset($productID)) {
		if(!isset($_SESSION["vote_completed"])){
			$_SESSION["vote_completed"] = array();
		}
		if(!isset($_SESSION["vote_completed"][ $productID ])){
			$_SESSION["vote_completed"][ $productID ] = 0;
		}

	}


	//show product information
	if (isset($productID) && $productID>=0 && !isset($_POST["add_topic"]) && !isset($_POST["discuss"]) ) {

		$product = GetProduct($productID);
		if (!$product || $product["enabled"]==0 || $product["productID"]==0) {
			error404page();
			//RedirectSQ('?');
		} else{

			//if ( !isset($_GET["vote"]) )
			//	IncrementProductViewedTimes($productID);

			$dontshowcategory = 1;

			$a = $product;

			if (isset($a['redirect']) && !empty($a['redirect'])) {
				Redirect($a['redirect']);
			}
			if (trim($a['name_ru']) == 'Запчасть больше не поставляется') {
				Redirect('/category/zapchasty/');
			}
			
			//проверить на внешние картинки
			$a['description'] = str_replace(array('="http://strument.com.ua/', '="https://strument.com.ua/', '="//strument.com.ua/'), '="/', $a['description']);
			if (strpos($a['description'], 'src="http') !== false ) {
				$a['description'] = grabAndSaveExternalImages($a['description']);
			}

			if ($a['PriceCID'] > 0) {
				$priceParam = array();
				$priceParam['custom_currency'] = $a["PriceCID"];
				$priceParam['display_template'] = false;
				$priceParam['default_display_unit'] = true;
				$priceParam['get_view'] = false;

				$a['Price'] = iPriceConvert($a['Price'], $priceParam);
				$a['list_price'] = iPriceConvert($a['list_price'], $priceParam);
			}

			//тип доставки по умолчанию
			if ($a["shipping_type"] < 1) {
				$a["shipping_type"] = 1;
				if ($a["Price"] > 1000) {
					$a["shipping_type"] = 2;
				}
			}

			$currencyEntry = Currency::getSelectedCurrencyInstance();
			$a["price_incurr"] = $currencyEntry->convertUnits($a["Price"]);
			$a["list_price_incurr"] = $currencyEntry->convertUnits($a["list_price"]);

			if ( ((float)$a["shipping_freight"]) > 0 )
				$a["shipping_freightUC"] = show_price( $a["shipping_freight"] );

			if ( isset($_GET["picture_id"]) ){
				$picture_row = db_phquery_fetch(DBRFETCH_ASSOC, "SELECT * FROM ?#PRODUCT_PICTURES WHERE photoID=?",$_GET["picture_id"] );
			}else if ( !is_null($a["default_picture"]) ){
				$picture_row = db_phquery_fetch(DBRFETCH_ASSOC, 'SELECT * FROM ?#PRODUCT_PICTURES WHERE photoID=?', $a["default_picture"]);
			}else{
				$picture_row = db_phquery_fetch(DBRFETCH_ASSOC, 'SELECT * FROM ?#PRODUCT_PICTURES WHERE productID=? ORDER BY priority LIMIT 1', $productID);
				if( isset($picture_row["photoID"]) )$a["default_picture"]=$picture_row["photoID"];
				else $picture_row = null;
			}
			
			if ( $picture_row ){
				$a["picture"] = $picture_row['filename'];
				$a["thumbnail"] = $picture_row['thumbnail'];
				$a["big_picture"] = $picture_row['enlarged'];
				$a['photoID'] = $picture_row['photoID'];				
			}

			if(!isset($a['productID'])) {
				error404page();
				//RedirectSQ('?');
			}
			
			if (!isset($categoryID)){
				$categoryID = $a["categoryID"];
				$smarty->assign('categoryID', $categoryID);
			}

			//get selected category info
			$selected_category = db_phquery_fetch(DBRFETCH_ASSOC, "SELECT categoryID, ".LanguagesManager::sql_prepareField('name')." AS name, slug, parts_view, 
																		".LanguagesManager::sql_prepareField('description')." AS description, picture 
																	FROM ".CATEGORIES_TABLE." 
																	WHERE categoryID=? ", $categoryID);
			$smarty->assign("selected_category", $selected_category);

			//calculate a path to the category
			$product_category_path = catCalculatePathToCategory($categoryID);

			//Деталировки
			foreach ( $product_category_path as $_cat) {
				if ($_cat['parts_view'] > 0) {
					$selected_category['parts_view'] = $_cat['parts_view'];
				}
			}


			//get product news and articles
			if (isset($product_category_path) && count($product_category_path) > 0) {
                $strCategoryIDs = implode_md(',', $product_category_path, 'categoryID');

                if (!empty($strCategoryIDs)) {
                    $product_news = db_phquery_fetch(DBRFETCH_ROW_ALL, 'SELECT nt.NID, nt.title_ru AS title 
																		FROM SC_news_table nt
																			LEFT JOIN SC_news_category_list ncl ON nt.NID = ncl.newsID
																			LEFT JOIN SC_news_product_list npl ON nt.NID = npl.news_id
																		WHERE nt.type = 1 	
																			AND (ncl.categoryID IN ('.$strCategoryIDs.') OR npl.product_id = '.$productID.') 
																		GROUP BY nt.NID 
																		ORDER BY nt.add_stamp DESC
																		LIMIT 5
														');
                    $smarty->assign("product_news", $product_news);
                }

			}

			//extra parameters
			$extra = GetExtraParametrs($productID);

			//related items
			$related = array();
			$related_records = db_phquery_fetch(DBRFETCH_ASSOC_ALL,' SELECT p.productID as productID, '.LanguagesManager::sql_prepareField('name').' AS name, 
																		in_stock,ordering_available, Price, list_price, PriceCID, redirect, slug, '.LanguagesManager::sql_prepareField('brief_description').' AS brief_description,
																		pics.thumbnail, pics.filename, pics.enlarged  
																	FROM ?#RELATED_PRODUCTS_TABLE AS rel 
																		LEFT JOIN ?#PRODUCTS_TABLE AS p ON (rel.`productID` = p.`productID`) 
																		LEFT JOIN SC_product_pictures AS pics ON p.default_picture = pics.photoID
																	WHERE rel.Owner=? AND rel.type=0 AND enabled = 1', $productID);
			foreach($related_records as $row) {
				if ($row['PriceCID'] > 0) {
					$priceParam = array();
					$priceParam['custom_currency'] = $row["PriceCID"];
					$priceParam['display_template'] = false;
					$priceParam['default_display_unit'] = true;
					$priceParam['get_view'] = false;

					$row['Price'] = iPriceConvert($row['Price'], $priceParam);
					$row['list_price'] = iPriceConvert($row['list_price'], $priceParam);
				}
				$related[] = $row;
			}
			$smarty->assign("product_related", $related);
			$smarty->assign("product_related_number", count($related));
			 
			//folow items
			$folow = array();
			$folow_records = db_phquery_fetch(DBRFETCH_ASSOC_ALL,' SELECT p.productID as productID, '.LanguagesManager::sql_prepareField('name').' AS name, 
																		in_stock,ordering_available, Price, list_price, PriceCID, redirect, slug, '.LanguagesManager::sql_prepareField('brief_description').' AS brief_description,
																		pics.thumbnail, pics.filename, pics.enlarged  
																	FROM ?#RELATED_PRODUCTS_TABLE AS rel 
																		LEFT JOIN ?#PRODUCTS_TABLE AS p ON (rel.`productID` = p.`productID`) 
																		LEFT JOIN SC_product_pictures AS pics ON p.default_picture = pics.photoID
																	WHERE rel.Owner=? AND rel.type=1 AND enabled = 1', $productID);
			foreach($folow_records as $row) {
				if ($row['PriceCID'] > 0) {
					$priceParam = array();
					$priceParam['custom_currency'] = $row["PriceCID"];
					$priceParam['display_template'] = false;
					$priceParam['default_display_unit'] = true;
					$priceParam['get_view'] = false;

					$row['Price'] = iPriceConvert($row['Price'], $priceParam);
					$row['list_price'] = iPriceConvert($row['list_price'], $priceParam);
				}
				$folow[] = $row;
			}
			$smarty->assign("product_folow", $folow);
			$smarty->assign("product_folow_number", count($folow));



			//nearest products
			$prevProductIDs = db_phquery_fetch(DBRFETCH_FIRST_ALL, 'SELECT p.productID 
												FROM '.PRODUCTS_TABLE.' AS p
												WHERE '._getConditionWithCategoryConj('', $a['categoryID'], true, 'p.').' 
													AND p.productID < ? AND p.enabled=1 AND p.in_stock>0 AND p.Price>0 AND p.archive=0 AND p.default_picture>0 AND p.canbuy>0
												ORDER BY p.productID ASC 
												LIMIT 100', $a['productID']);
			$nextProductIDs = db_phquery_fetch(DBRFETCH_FIRST_ALL, 'SELECT p.productID 
												FROM '.PRODUCTS_TABLE.' AS p
												WHERE '._getConditionWithCategoryConj('', $a['categoryID'], true, 'p.').' 
													AND p.productID > ? AND p.enabled=1 AND p.in_stock>0 AND p.Price>0 AND p.archive=0 AND p.default_picture>0 AND p.canbuy>0
												ORDER BY p.productID ASC 
												LIMIT 100', $a['productID']);

			$nearestProductIDs = [];
			if (is_array($prevProductIDs) && count($prevProductIDs) > 0) {
				$prevProductIDs = array_slice($prevProductIDs, -5);
				$nearestProductIDs = array_merge($nearestProductIDs, $prevProductIDs);
			}
			if (is_array($nextProductIDs) && count($nextProductIDs) > 0) {
				$nextProductIDs = array_slice($nextProductIDs, 5);
				$nearestProductIDs = array_merge($nearestProductIDs, $nextProductIDs);
			}

			if (is_array($nearestProductIDs) && count($nearestProductIDs) > 0) {

				$product_nearest = [];
				$callBackParam = array();
				$callBackParam['productIDs'] = $nearestProductIDs;
				$callBackParam['non_zero_price'] = true;
				$callBackParam['hide_extra'] = 1;
				$callBackParam['ignore_count'] = 1;
				//$callBackParam['hideProductsInGroups'] = true;
				
				$category_count = 0;
				$category_offset = 0;
				GetNavigatorHtml('', 10, 'prdSearchProductByTemplate', $callBackParam, $product_nearest, $category_offset, $category_count);
				$smarty->assign("product_nearest", $product_nearest);
			}




            //category_hits
            $category_hits = array();

            $callBackParam = array();
            $callBackParam['categoryID'] = $a['categoryID'];
            $callBackParam['enabled'] = 1;
            $callBackParam['archive'] = 0;
            if ($selected_category['parts_view'] != 1) {
                $callBackParam['non_zero_price'] = true;
            }
            $callBackParam['searchInSubcategories'] = true;
            $callBackParam['searchInEnabledSubcategories'] = true;
            $callBackParam['sort'] = 'viewed_times';
            $callBackParam['direction'] = 'DESC';
            $callBackParam['hide_extra'] = 1;
            $callBackParam['ignore_count'] = 1;
            //$callBackParam['hideProductsInGroups'] = true;

            $category_count = 0;
            $category_offset = 0;
            GetNavigatorHtml(
                '',
                15,
                'prdSearchProductByTemplate',
                $callBackParam,
                $category_hits,
                $category_offset,
                $category_count
            );

            $weekNum = date("W") % 3;
            $startFrom = 5 * $weekNum;
            $startFrom = ($category_count-5) < $startFrom?$category_count-5:$startFrom;
            $startFrom = $startFrom < 0?0:$startFrom;
            $category_hits = array_slice($category_hits, $startFrom, 5);
            $smarty->assign('category_hits', $category_hits);
            //category_hits END



            //rand items
			//if (isset($_GET['asfd'])) {
				$limitRand = 20;
				$limitRandProds = 12;
				$randProdsCacheID = mt_rand(0, $limitRand);
				$Cache_Lite = new Cache_Lite(array('cacheDir' => WBS_DIR.'/tmp/', 'lifeTime' => CONF_CACHETIME, 'automaticSerialization' => true));
				if ($product_rand = $Cache_Lite->get('randProdsCache'.$randProdsCacheID, 'randProdsCache')) {

				} else {
					$product_rand = db_phquery_fetch(DBRFETCH_ASSOC_ALL,' SELECT p.productID as productID, p.name_ua, p.name_en, p.name_ru, 
																				p.in_stock, p.ordering_available, p.Price, p.list_price, p.PriceCID, p.slug, p.redirect, list_price,
																				pics.thumbnail, p.canbuy
																			FROM SC_products AS p
																				LEFT JOIN SC_product_pictures AS pics ON p.default_picture = pics.photoID
																				JOIN (SELECT CEIL(RAND() *
																									 (SELECT MAX(productID)
																										FROM SC_products)) AS productID) AS r2
																			WHERE p.productID >= r2.productID AND p.enabled > 0 AND p.Price > 0 AND p.canbuy > 0 AND p.ordering_available > 0 AND p.default_picture > 0 AND p.categoryID > 1 AND p.productID <> ? 
																			ORDER BY p.productID ASC
																			LIMIT '.$limitRandProds.'
																		', $productID, );
					foreach ($product_rand as $key => $_product) {

                        LanguagesManager::ml_fillFields(PRODUCTS_TABLE, $_product);

						if ($_product['PriceCID'] > 0) {
							$priceParam = array();
							$priceParam['custom_currency'] = $_product["PriceCID"];
							$priceParam['display_template'] = false;
							$priceParam['default_display_unit'] = true;
							$priceParam['get_view'] = false;

							$_product['Price'] = iPriceConvert($_product['Price'], $priceParam);
							$_product['list_price'] = iPriceConvert($_product['list_price'], $priceParam);
						}
                        $product_rand[$key] = $_product;
						$product_rand[$key]['PriceWithUnit'] = show_price($_product['Price']);
						$product_rand[$key]['list_priceWithUnit'] = show_price($_product['list_price']);
					}

					if (count($product_rand) > 0) {
						$Cache_Lite->save($product_rand, 'randProdsCache'.$randProdsCacheID, 'randProdsCache');
					}
				}
				for ($i=0; $i < $limitRand; $i++) { 
					if ($product_rand_add = $Cache_Lite->get('randProdsCache'.$i, 'randProdsCache')) {
						$product_rand = array_merge($product_rand, $product_rand_add);
					}
				}

				shuffle($product_rand);
				$product_rand = array_slice($product_rand, 0, $limitRandProds);
				$smarty->assign("product_rand", $product_rand);
			//}

			/*$randProductIDs = array();
			$productTotal = db_phquery_fetch(DBRFETCH_FIRST,' SELECT COUNT(p.productID)
																	FROM ?#PRODUCTS_TABLE AS p
																	WHERE p.enabled > 0 AND p.Price > 0 AND p.ordering_available > 0 AND p.default_picture > 0 AND p.categoryID > 1 
																', $productID);
			$start_row = mt_rand(0, $productTotal - 60);
			$randProductIDs = array_merge($randProductIDs, db_phquery_fetch(DBRFETCH_FIRST_ALL,' SELECT p.productID 
																	FROM ?#PRODUCTS_TABLE AS p
																	WHERE p.enabled > 0 AND p.Price > 0 AND p.ordering_available > 0 AND p.default_picture > 0 AND p.categoryID > 1 
																	ORDER BY customers_rating DESC
																	LIMIT ?, 60', $start_row));
			$start_row = mt_rand(0, $productTotal - 60);
			$randProductIDs = array_merge($randProductIDs, db_phquery_fetch(DBRFETCH_FIRST_ALL,' SELECT p.productID 
																	FROM ?#PRODUCTS_TABLE AS p
																	WHERE p.enabled > 0 AND p.Price > 0 AND p.ordering_available > 0 AND p.default_picture > 0 AND p.categoryID > 1 
																	ORDER BY customers_rating ASC
																	LIMIT ?, 60', $start_row));
			$start_row = mt_rand(0, $productTotal - 60);
			$randProductIDs = array_merge($randProductIDs, db_phquery_fetch(DBRFETCH_FIRST_ALL,' SELECT p.productID 
																	FROM ?#PRODUCTS_TABLE AS p
																	WHERE p.enabled > 0 AND p.Price > 0 AND p.ordering_available > 0 AND p.default_picture > 0 AND p.categoryID > 1 
																	ORDER BY customers_rating DESC
																	LIMIT ?, 60', $start_row));
			shuffle($randProductIDs);
			//$randProductIDs = array_slice($randProductIDs, 0, 12);
			if (count($randProductIDs) > 0) {
				$product_rand = array();

				$callBackParam = array();
				$callBackParam['productIDs'] = $randProductIDs;
				$callBackParam['!productID'] = $productID;
				$callBackParam['enabled'] = 1;
				$callBackParam['hideProductsInGroups'] = true;
				$callBackParam['non_zero_price'] = true;
				$callBackParam['hide_extra'] = true;
				$callBackParam['groupByCategories'] = true;
				$offset = 0;
				$count = 0;
				$navigatorHtml = GetNavigatorHtml('', 12, 'prdSearchProductByTemplate', $callBackParam, $product_rand, $offset, $count);

				if (count($product_rand) < 12) {
					$product_rand2 = array();
					shuffle($randProductIDs);
					$callBackParam['productIDs'] = $randProductIDs;
					$callBackParam['groupByCategories'] = false;
					$navigatorHtml = GetNavigatorHtml('', 12, 'prdSearchProductByTemplate', $callBackParam, $product_rand2, $offset, $count);
					$product_rand = array_merge($product_rand, $product_rand2);
					$product_rand = array_slice($product_rand, 0, 12);
				}

				$smarty->assign("product_rand", $product_rand);
			}*/

			//if ($_SESSION['WBS_ACCESS_SC'] == 1) {
				$_sale_category = db_phquery_fetch(DBRFETCH_ASSOC, ' 
					SELECT 
						saleprp.categoryID AS saleCategoryID,
						saleprp.price AS salePrice,
						saleprp.list_price AS saleListPrice,
						saleprp.gift_productID, 
						saleprp.sale_dateto AS product_sale_dateto, 
						saleprp.sale_picture AS product_sale_picture, 
						saleprp.sale_sticker AS product_sale_sticker, 
						saleprp.sale_icons AS product_sale_icons,
						c.sale_dateto, c.sale_sticker, c.sale_icons, 
						c.slug AS sale_category_slug, 
						c.name_ua, c.name_en, c.name_ru, 
						c.full_name_ru AS sale_category_full_name, c.brief_description_ru AS sale_category_brief_description, c.description_ru AS sale_category_description,
						povv.variantID AS saleVariantID, povv.option_value_sale_name_ru AS option_value_sale_name, povv.option_value_sale_brief_description_ru AS option_value_sale_brief_description, povv.option_value_sale_description_ru AS option_value_sale_description
					FROM SC_sale_product_params AS saleprp 
						LEFT JOIN SC_categories AS c ON saleprp.categoryID=c.categoryID 
						LEFT JOIN SC_product_options_set AS pos ON saleprp.productID=pos.productID AND pos.optionID=207
						LEFT JOIN SC_products_opt_val_variants AS povv ON pos.variantID=povv.variantID 
					WHERE saleprp.productID=? AND c.hidden=0
					LIMIT 1 
				', $a['productID']);

				if ( isset($_sale_category) && isset($_sale_category['saleCategoryID']) && $_sale_category['saleCategoryID'] > 0 ) {

                    LanguagesManager::ml_fillFields(CATEGORIES_TABLE, $_sale_category);
                    $_sale_category['sale_category_name'] = $_sale_category['name'];

					$a['sale_dateto'] = $_sale_category['sale_dateto'];
					$a['sale_category_categoryID'] = $_sale_category['saleCategoryID'];
					$a['sale_category_slug'] = $_sale_category['sale_category_slug'];
					$a['sale_category_name'] = $_sale_category['sale_category_name'];
					$a['sale_category_name'] = !empty($_sale_category['option_value_sale_name'])?$_sale_category['option_value_sale_name']:$a['sale_category_name'];
					$a['sale_category_full_name'] = $_sale_category['sale_category_full_name'];
					$a['sale_category_brief_description'] = $_sale_category['sale_category_brief_description'];
					$a['option_value_sale_brief_description'] = $_sale_category['option_value_sale_brief_description'];
					$a['sale_category_brief_description'] = !empty($_sale_category['option_value_sale_brief_description'])?$_sale_category['option_value_sale_brief_description']:$a['sale_category_brief_description'];
					$a['sale_category_description'] = $_sale_category['sale_category_description'];
					$a['saleVariantID'] = $_sale_category['saleVariantID'];

					$a['product_sale_dateto'] = trim($_sale_category['product_sale_dateto']);
					$a['product_sale_sticker'] = trim($_sale_category['product_sale_sticker']);
					$a['product_sale_icons'] = trim($_sale_category['product_sale_icons']);

					$a['sale_dateto'] = !empty($a['product_sale_dateto'])?$a['product_sale_dateto']:$a['sale_dateto'];
	 
					if ($_sale_category['salePrice'] > 0) {
						$a['Price'] = $_sale_category['salePrice'];
					}
					if ($_sale_category['saleListPrice'] > 0) {
						$a['list_price'] = $_sale_category['saleListPrice'];
					}
					$a['gift_product'] = array();
					if ($_sale_category['gift_productID'] > 0) {
						$a['gift_product'] = db_phquery_fetch(DBRFETCH_ASSOC, 'SELECT p.productID, p.slug, p.name_ua, p.name_en, p.name_ru, pic.thumbnail 
																						FROM SC_products AS p 
																						    LEFT JOIN SC_product_pictures AS pic ON p.default_picture=pic.photoID 
																						WHERE p.productID=? AND p.enabled=1 AND p.ordering_available=1 ', $_sale_category['gift_productID']);

                        LanguagesManager::ml_fillFields(PRODUCTS_TABLE, $a['gift_product']);
					}
					
					$_sale_category['sale_sticker'] = !empty($_sale_category['product_sale_sticker'])?$_sale_category['product_sale_sticker']:$_sale_category['sale_sticker'];
					if (!empty($_sale_category['sale_sticker'])) {
						$a['sale_sticker_arr'] = explode(',', $_sale_category['sale_sticker']);
						$a['sale_sticker_arr'] = array_map('trim', $a['sale_sticker_arr']);
						$a['sale_sticker_arr'] = array_filter($a['sale_sticker_arr']);
					}

					$_sale_category['sale_icons'] = !empty($_sale_category['product_sale_icons'])?$_sale_category['product_sale_icons']:$_sale_category['sale_icons'];
					if (!empty($_sale_category['sale_icons'])) {
						$a['sale_icons_arr'] = explode(',', $_sale_category['sale_icons']);
						$a['sale_icons_arr'] = array_map('trim', $a['sale_icons_arr']);
						$a['sale_icons_arr'] = array_filter($a['sale_icons_arr']);
					}
				}
			//}

            //wholesale uni discount rules
            if ($a["Price"] > 0) {
                $wholesalePrices = getProductUniWholesalePrices($a['productID']);

                foreach ($wholesalePrices as $_key => $_whPrice) {
                    $_whPrice['summary'] = $a["Price"] * $_whPrice['quantity'] * ((100-$_whPrice['discount']) / 100);
                    $_whPrice['summaryUC'] = show_price($_whPrice['summary']);
                    $_whPrice['price'] = $a["Price"] * ((100-$_whPrice['discount']) / 100);
                    $_whPrice['priceUC'] = show_price($_whPrice['price']);

                    $wholesalePrices[$_key] = $_whPrice;
                }
            }
			
			$a["PriceWithUnit"] = iPriceConvert($a["Price"]); 

			$a["list_priceWithUnit"] = iPriceConvert( $a["list_price"] );
			$a["SavePrice"] = show_price( $a["list_price"] - $a["Price"]); //you save (value)
			$a["PriceWithOutUnit"] = show_priceWithOutUnit( $a["Price"] );
			if($a['list_price'] && $a['list_price'] > $a['Price']) {
				$a['SavePricePercent'] = ceil(((($a['list_price']-$a['Price'])/$a['list_price'])*100));
			}

			$all_product_pictures = array();
			$dbres = db_phquery("SELECT * FROM ?#PRODUCT_PICTURES WHERE productID=? ORDER BY priority", $productID);
			while ($row = db_fetch_assoc($dbres)){
				$all_product_pictures[] = $row;
			}


			//short name
			$firstCharPos = 0;
			$firstCharPos = mb_strpos($a['name'], ',');
			if ($firstCharPos < 1) {
				$a['short_name'] = $a['name'];
			} else {
				$a['short_name'] = mb_substr($a['name'], 0, $firstCharPos);
				$a['name_ending'] = mb_substr($a['name'], $firstCharPos+1, mb_strlen($a['name']));
			}
			
			if(count($all_product_pictures)>1) {
				$smarty->assign("all_product_pictures", $all_product_pictures );
			}

            $a['supplier'] = db_phquery_fetch(DBRFETCH_ASSOC, 'SELECT sp.id AS supplier_id, sp.name, sp.enable_buy 
                                                            FROM SC_products_suppliers AS ps
                                                                LEFT JOIN SC_suppliers AS sp ON ps.supplier_id=sp.id
                                                            WHERE ps.productID=? ', $a['productID']);

			//Деталировки
			if ($selected_category['parts_view'] == 1) {

				/*$productsModels = getProductModels($productID, $productID);
				if (isset($_GET['prod_models'])) {
					echo ' prod_models ';
					print_r($productsModels);
					die();
				}*/
				$smarty_model_item = new View; //core smarty object
				$smarty_model_item->force_compile = false;
				$smarty_model_item->template_dir = DIR_TPLS.'/frontend';
			
				$_description = $a['description'];
				$_description = str_replace('<span>	</span>', ' ', $_description);
				$_description = preg_replace('/<([^>\s]+)[^>]*>(?:\s*(?:<br \/>|\t| |&nbsp;|&thinsp;|&ensp;|&emsp;|&#8201;|&#8194;|&#8195;)\s*)*<\/\1>/', ' ', $_description);

				$a['description_has_images'] = substr_count($a['description'], '<img');

				$document = new DOMDocument('1.0', 'UTF-8'); 
				libxml_use_internal_errors(true);
				
				$document->loadHTML('<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />'.$_description);

				$limit = 160;

				//images tags
                $domImg_Tags = $document->getElementsByTagName('img');
                $counter = 0;
                while ($domImg_Tags->length && $counter < $limit) {
                    $counter++;
                    $imgTag = $domImg_Tags->item($counter);
                    if (isset($imgTag)) {
                        $imgClass = $imgTag->setAttribute('class', 'lazyload');
                        $imgTag->setAttribute('width', 1240);
                        $imgTag->setAttribute('height', 800);
                    }
                }

                $counter = 0;
				$product_counter = 0;
				$domP_Tags = $document->getElementsByTagName('p');

				while ($domP_Tags->length && $counter < $limit) {
					$counter++;
					$pTag = $domP_Tags->item($counter);

					$modelInfo = partsProducstParseModelInfo(trim($pTag->nodeValue));
					if ($modelInfo && !empty($modelInfo['code'])) {

						$frag = $document->createDocumentFragment();

						$found_model = getProductModel(0, $modelInfo['code']);

						/*if (isset($_GET['console'])) {
							echo $pStr.' = '.$modelInfo['code'].'<br>';
							print_r($found_model);
						}*/

						if (is_array($found_model) && count($found_model) > 0) {
							$found_model['id'] = $modelInfo['id'];
							if (!empty($modelInfo['name'])) {
								$found_model['name'] = $modelInfo['name'].' ('.$found_model['name'].')';
							}
							$smarty_model_item->assign('description_has_images', $a['description_has_images']);
							$smarty_model_item->assign('product_info', $found_model);
						} else {
							$_dummy_model = array(
								'id' => $modelInfo['id'],
								'product_code' => $modelInfo['code'],
								'name' => $modelInfo['name'],
							);
							$smarty_model_item->assign('description_has_images', $a['description_has_images']);
							$smarty_model_item->assign('product_info', $_dummy_model);
						}

						$assigned = $smarty_model_item->getTemplateVars('product_info');
						if (!empty($assigned) && count($assigned) > 0) {
							$product_counter++;
							$smarty_model_item->assign('product_counter', $product_counter);
						}
						$_model_item_html = $smarty_model_item->fetch("model_item.html");

						$frag->appendXML($_model_item_html);
						$pTag->parentNode->replaceChild($frag->cloneNode(true), $pTag);
						$counter--;
					}
				}

				$_description = $document->saveHTML();
				$_description = preg_replace('~<(?:!DOCTYPE|/?(?:html|head|body))[^>]*>\s*~i', '', $_description);
				$_description = preg_replace('/<meta[^>]*>/', '', $_description);
				unset($document);
				libxml_clear_errors();

				$a['description'] = $_description;

                //category products
                $callBackParam = array();
                $products = array();
                $callBackParam['categoryID'] = $a['categoryID'];
                $callBackParam['enabled'] = 1;
                $callBackParam['archive'] = 0;
                $callBackParam['searchInSubcategories'] = true;
                $callBackParam['hide_extra'] = 1;
                $prodsPerPage = CONF_PRODUCTS_TBL_PER_PAGE;

                $page = 0;
                $count = 0;
                $categoriesResult = array();
                GetNavigatorHtml(
                    '',
                    $prodsPerPage,
                    'prdSearchProductByTemplate',
                    $callBackParam,
                    $category_products,
                    $offset,
                    $count,
                    $categoriesResult
                );
                $smarty->assign("category_products", $category_products);

                $smarty->assign("main_content_template", "product_models.frame.html");
			} else {
				//simple product
				$smarty->assign("main_content_template", "product_info.frame.html");
			}


			$model_parent_products = db_phquery_fetch(DBRFETCH_ASSOC_ALL, 'SELECT 
																		p.productID,
																		p.categoryID, 
																		p.Price, 
																		p.list_price, 
																		p.in_stock, 
																		p.ordering_available, 
																		p.enabled,  
																		p.product_code, 
																		p.default_picture, 
																		p.slug, 
																		p.redirect, 
																		p.name_ua,
																		p.name_en,
																		p.name_ru,
																		pics.thumbnail,
																		pics.filename,
																		pics.enlarged,
																		pm.parentProductID, 
																		pm.childProductID 
																	FROM SC_products_models AS pm 
																		LEFT JOIN SC_products AS p ON pm.parentProductID=p.productID
																		LEFT JOIN SC_product_pictures pics ON p.default_picture = pics.photoID   
																	WHERE pm.childProductID = ? 
																	GROUP BY pm.parentProductID
																	ORDER BY IF(p.Price>0,0,1) ASC, p.ordering_available DESC, IF(p.in_stock>0,0,1) ASC, p.sort_order, name_ru ASC ' , $productID);

            foreach ($model_parent_products as $key => $item) {
                LanguagesManager::ml_fillFields(CATEGORIES_TABLE, $item);
                $model_parent_products[$key] = $item;
			}

			$smarty->assign("model_parent_products", $model_parent_products);
			//print_r($model_parent_products);

			$a['description'] = str_replace('http://www.youtube', 'https://www.youtube', $a['description']);

            $a['replacement_code'] = trim($a['replacement_code']);
			if (!empty($a['replacement_code'])) {

                $a['replacement_code'] = getReplacementProductsCodes($a['replacement_code']);
                if (!empty($a['replacement_code']) && count($a['replacement_code'])) {
                    $a['replacementProducts'] = db_phquery_fetch(DBRFETCH_ASSOC_ALL, 'SELECT productID, product_code, slug, redirect 
                                                            FROM SC_products 
                                                            WHERE product_code IN (?@) ', $a['replacement_code']);
                }
			}


			$spCats = [];
			foreach ($product_category_path as $_cat) {
				$spCats[] = $_cat['categoryID'];
			}
			$spCats[] = $categoryID;
			$spCats = array_map('intval', $spCats);

			$shippay_block_content_prods = shipPayBlockContentProds($productID, $spCats);
			$smarty->assign('shippay_block_content_prods', $shippay_block_content_prods);

			if (shipPayBlockContentProdFreeShip($productID, $spCats)) {
				$a['free_shipping'] = 1;
			} 


			//reviews 
			$disscuss_offset = (int)getRequestData('offset', 'get');
            $callBackParam = [];
            $callBackParam['visible'] = true;
            $callBackParam['visibleForCustomerID'] = intval($customerEntry->customerID);
            $callBackParam['productID'] = $productID;
            $callBackParam['parentDID'] = 0;
            $offset = intval($disscuss_offset??0);
            $navigatorParams = ['offset'=>$offset, 'CountRowOnPage' => CONF_PRODUCTS_PER_PAGE]; //CONF_PRODUCTS_PER_PAGE
            $DiscusTotalRows = 0;
            $totalRated = 0;
            $a['product_last_reviews'] = discGetDiscussions($callBackParam, $navigatorParams, $DiscusTotalRows, $totalRated);

            $DiscusTotalRows = $DiscusTotalRows>0?$DiscusTotalRows:count($a['product_last_reviews']);

            $a['product_last_reviews_count'] = $DiscusTotalRows;
            $a['product_reviews_count'] = $DiscusTotalRows;

            $product_last_reviews_pages = '';
            ShowNavigator($DiscusTotalRows, $offset, CONF_PRODUCTS_PER_PAGE, '', $product_last_reviews_pages, '#pane_reviews');
            $a['product_last_reviews_pages'] = $product_last_reviews_pages;

            $a['selected_category'] = $selected_category;


			$microdataJsonArr = [
				'@context' => 'https://schema.org/',
				'@type' => 'Product',
				'name' => $a['name'],

				'sku' => $a['productID'],
				'mpn' => $a['product_code'],
				'offers' => [
			        '@type' => 'Offer',
			        'url' => 'https://strument.com.ua/product/'.$a['slug'].'/',
			        'priceCurrency' => 'UAH',
			        'price' => $a['PriceWithOutUnit'],
			        'itemCondition' => 'https://schema.org/NewCondition',
			        'availability' => 'https://schema.org/OutOfStock',
				],
			];

			if (is_array($all_product_pictures) && count($all_product_pictures) > 0) {
				$microdataJsonArr['image'] = [];
				foreach ($all_product_pictures as $_pic) {
					if (!empty($_pic['enlarged'])) {
						$microdataJsonArr['image'][] = 'https://strument.com.ua'.URL_PRODUCTS_PICTURES.'/'.$_pic['enlarged'];
					}
				}
			}

			if (!empty($a['description'])) {
				$microdataJsonArr['description'] = mb_truncate(strip_tags($a['description']), 1024);
				$microdataJsonArr['description'] = str_replace('ПараметрЗначение', ' ', $microdataJsonArr['description']);
				$microdataJsonArr['description'] = preg_replace('/\s\s+/', ' ', $microdataJsonArr['description']);
			}

			if ($a['ordering_available'] > 0) {
				$microdataJsonArr['offers']['availability'] = 'https://schema.org/InStock';
			}
			$a['microdataJson'] = json_encode($microdataJsonArr);


			$smarty->assign("product_category_path", $product_category_path);
			$smarty->assign("product_info", $a);
			$smarty->assign("product_extra", $extra);

			$smarty->assign("wholesalePrices", $wholesalePrices);


			$breadcrumbs = [];
			$breadcrumbs[] = [
				'name' => 'Интернет магазин инструментов',
				'url' => 'https://strument.com.ua/',
			];
			foreach ($product_category_path as $item) {
				$breadcrumbs[] = [
					'name' => $item['name'],
					'url' => 'https://strument.com.ua/category/'.$item['slug'].'/',
				];
			}


			foreach ($extra as $_product_extra) {

				if (isset($_product_extra['values_to_select']) && is_array($_product_extra['values_to_select']))  {

					foreach ($_product_extra['values_to_select'] as $_extra_value) {
						if (!empty($_extra_value['variant_slug'])) {
							$breadcrumbs[] = [
								'name' => $_extra_value['option_value'],
								'url' => 'https://strument.com.ua/category/'.$a['selected_category']['slug'].'/search/'.$_extra_value['variant_slug'].'/',
							];	
						}

					}
				} 
			}

			$breadcrumbs[] = [
				'name' => $a['name'],
				'url' => 'https://strument.com.ua/product/'.$a['slug'].'/',
			];

			$smarty->assign('microdataBreadCrumbs', microdataBreadCrumbs($breadcrumbs));



            $faqItems = [];

            //Для каких товаров подойдет
            if (count($related)) {
                $productsStr = [];
                foreach ($related  as $_product) {
                    $productsStr[] = '<li><a href="/product/'.$_product['slug'].'/">'.$_product['name'].'</a></li>';
                }
                $faqItems[] = [
                    'question' => 'Для каких товаров подойдет '.mb_strtolower($a['name']).'?',
                    'answer' => '<ul>'.implode(', ', $productsStr).'</ul>',
                ];
            }

            //Какие условия доставки товара
            $faqList = [];
            if ($shippay_block_content_prods) {
                foreach ($shippay_block_content_prods AS $_item) {
                    if (!empty($_item['title']) && strpos(mb_strtolower($_item['title']), 'опла') === false) {
                        $faqList[] = '<li><b>' . $_item['title'] . '</b> '.$_item['description'].'</li>';
                    }
                }
            } else {
                $faqList[] = '<li><b>'.translate('Self pickup').'</b>'.translate('Kyiv city').'.'.translate('st. Kirillovskaya').' (Фрунзе) 160-А, оф. 57 '.translate('elevator').' №3.</li>';
                $faqList[] = '<li><b>'.translate('Shipping').'</b>'.translate('Украине').' '.translate('freight carriers').'<br>'.translate('Nova poshta').' '.translate('Payment upon receipt').'</li>';
            }
            $faqItems[] = [
                'question' => 'Какие условия доставки товара?',
                'answer' => '<ul>'.implode('', $faqList).'</ul>',
            ];

            //Какие условия оплаты товара
            $faqList = [];
            if (isset($shippay_block_content_prods) && is_array($shippay_block_content_prods) && count($shippay_block_content_prods)) {
                foreach ($shippay_block_content_prods AS $_item) {
                    if (!empty($_item['title'])
                        && (
                            strpos(mb_strtolower($_item['title']), 'опла') !== false
                            || strpos(mb_strtolower($_item['title']), 'покуп') !== false
                        )) {
                        $faqList[] = '<li><b>' . $_item['title'] . '</b> '.$_item['description'].'</li>';
                    }
                }
            } else {
                $faqList[] = '<li>'.translate('Cash payment').'</li>';
                $faqList[] = '<li>'.translate('Cashless payment with VAT').'</li>';
                $faqList[] = '<li>'.translate('C.O.D').'</li>';
                $faqList[] = '<li>'.translate('Privat24').'</li>';
            }
            if (count($shippay_block_content_prods)) {
                $faqItems[] = [
                    'question' => 'Какие условия оплаты товара?',
                    'answer' => '<ul>'.implode('', $faqList).'</ul>',
                ];
            }

            if ($a['Price']) {
                //Какая актуальная цена на
                $faqItems[] = [
                    'question' => 'Какая актуальная цена на '.mb_strtolower($a['name']).'?',
                    'answer' => '<p>Стоимость товара - '.strip_tags($a['PriceWithUnit']).'</p>',
                ];
            }

            //Какие альтернативные товары есть в категории
            if (count($product_nearest)) {
                $productsStr = [];
                $product_nearest = array_slice($product_nearest, 0, 5);
                foreach ($product_nearest  as $_product) {
                    $productsStr[] = '<li><a href="/product/'.$_product['slug'].'/">'.$_product['name'].'</a></li>';
                }
                $faqItems[] = [
                    'question' => 'Какие альтернативные товары есть в категории?',
                    'answer' => '<ul>'.implode('', $productsStr).'</ul>',
                ];
            }
            $smarty->assign( 'faqItems', $faqItems);

            $canonicalUrl = set_query('?ukey=product=&productID='.$a['productID'].'&product_slug='.$a['slug']);
            $smarty->assign("canonical_meta_tag", '<link rel="canonical" href="'.$canonicalUrl.'" />');
		}
	} else {
		error404page();
	}
	
	set_query('&picture_id=', '', true);
