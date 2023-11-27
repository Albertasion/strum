<?php
ini_set('error_reporting', E_ALL);
ini_set('display_errors', 1);
ini_set('max_execution_time', 0);
require 'vendor/autoload.php';
include_once 'phpquery.php';
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;
$spreadsheet = new Spreadsheet();
$writer = new Xlsx($spreadsheet);

function extract_between($string, $start, $end) {
  $start_pos = strpos($string, $start);
  if ($start_pos === false) {
      return '';
  }
  $end_pos = strpos($string, $end, $start_pos + strlen($start));
  if ($end_pos === false) {
      return '';
  }
  return substr($string, $start_pos + strlen($start), $end_pos - ($start_pos + strlen($start)));
}
function requests ($url) {
  $ch = curl_init();
   curl_setopt($ch, CURLOPT_URL, $url);
   curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
   curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
   curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36');
  $output = curl_exec($ch);
  curl_close($ch);
  return $output;
  }
use PhpOffice\PhpSpreadsheet\IOFactory;

// Загрузка Excel файла
$excelFile = 'list.xlsx';
$spreadsheet = IOFactory::load($excelFile);
$sheet = $spreadsheet->getActiveSheet();



// Итерация по ссылкам из Excel
foreach ($sheet->getRowIterator() as $row) {
    $cellValue = $sheet->getCell('A' . $row->getRowIndex())->getValue();

    try {
        // Отправка запроса к веб-странице

        $response =  requests ($cellValue);

        // Найти определенный элемент на странице
        $output = phpQuery::newDocument($response);
      
        // Назва категорії для формування назви файла
        $productId = $output->find('.product_code')->text();
        $trimproductId = extract_between($productId, 'Код для замовлення: ', ' / ');
        echo '' . $trimproductId . '</br>';

        // Записать результат в Excel
        $sheet->setCellValue('B' . $row->getRowIndex(), $trimproductId);
    } catch (\Exception $e) {
        // Обработка ошибки загрузки страницы
        echo 'Ошибка при загрузке страницы: ' . $e->getMessage() . '</br>';
        $sheet->setCellValue('B' . $row->getRowIndex(), $e->getMessage());
    }
}

// Сохранение обновленного Excel файла
$writer = IOFactory::createWriter($spreadsheet, 'Xlsx');
$writer->save('list.xlsx');
?>