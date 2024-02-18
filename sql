UPDATE sc_products as p JOIN sc_products_suppliers as ps ON p.productID=ps.productID
SET `description_ua` = CONCAT(
    SUBSTRING_INDEX(p.description_ua, '<div class="alcodata">', 1),
    SUBSTRING_INDEX(p.description_ua, '</table></div>', -1)
) WHERE ps.supplier_id='40'


UPDATE SC_products SET name_ru = REPLACE(name_ru, 'Python3', 'ST') WHERE name_ru LIKE "%Python3%";
UPDATE SC_products SET name_ua = REPLACE(name_ua, 'Python3', 'ST') WHERE name_ua LIKE "%Python3%"; 
UPDATE SC_products SET description_ru = REPLACE(description_ru, 'Python3', 'ST') WHERE description_ru LIKE "%Python3%"; 
UPDATE SC_products SET description_ua = REPLACE(description_ua, 'Python3', 'ST') WHERE description_ua LIKE "%Python3%"; 
UPDATE SC_categories SET name_ua = REPLACE(name_ua, 'Python3', 'ST') WHERE name_ua LIKE "%Python3%"; 
UPDATE SC_categories SET name_ru = REPLACE(name_ru, 'Python3', 'ST') WHERE name_ru LIKE "%Python3%"; 
UPDATE SC_categories SET description_ua = REPLACE(description_ua, 'Python3', 'ST') WHERE description_ua LIKE "%Python3%"; 
UPDATE SC_categories SET description_ru = REPLACE(description_ru, 'Python3', 'ST') WHERE description_ru LIKE "%Python3%";

