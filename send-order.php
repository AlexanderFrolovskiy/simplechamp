<?php

function cleanup($value){
    $value = htmlspecialchars($value);
    $value = urldecode($value);
    $value = trim($value);
    return $value;
}

$products = [
    1001 => [
        "name" => "Ножи для метания СМН+",
        "price" => 5600
    ],
    1002 => [
        "name" => "Ножи для метания СМН",
        "price" =>  5600
    ],    
    2001 => [
        "name" => "Чехол ЦИФРА РФ на 3 ножа",
        "price" =>  400
    ],    
    2002 => [
        "name" => "Чехол МУЛЬТИКАМ на 3 ножа",
        "price" =>  400
    ],
    2003 => [
        "name" => "Чехол ЧЕРНЫЙ на 3 ножа",
        "price" =>  600,
    ],
    2004 =>  [
        "name" => "Чехол АТАКС на 3 ножа",
        "price" =>  600
    ],        
    2005 => [
       "name" => "Чехол ОРАНЖ на 3 ножа",
       "price" =>  600
    ],    
    2006 => [
        "name" => "Чехол ХАКИ на 3 ножа",
        "price" =>  600
    ],    
    2007 => [
        "name" => "Чехол АТАКС ГРИН на 3 ножа",
        "price" =>  600
    ],    
    3001 => [
        "name" => "Медальница Движемся вперед",
        "price" =>  2500
    ],    
    3002 => [
        "name" => "Рамки для номеров",
        "price" =>  3000
    ],    
    4001 => [
        "name" => "Стенд для метания",
        "price" =>  7500
    ],
    4002 => [
        "name" => "Малый стенд для метания",
        "price" =>  5000
    ],    
    4003 => [
        "name" => "Мишень А3 для метания",
        "price" =>  4500
    ],    
    4004 => [
        "name" => "Мишень А4 для метания",
        "price" =>  3000
    ]    
];


$product = json_decode($_POST["basket_products"], true);
$client_surname = cleanup($_POST["basket_surname"]);
$client_name = cleanup($_POST["basket_name"]);
$client_email = cleanup($_POST["basket_email"]);
$client_tel = cleanup($_POST["basket_tel"]);
$client_address = cleanup($_POST["basket_address"]);

$basket = "";

foreach($product as $p) {
    $product_id = $p["id"];
    $name = $products[$product_id]["name"];
    $count = strval($p["count"]);
    $basket .=  $name . "count:" . $count . "<br>"; 
}

mail("info@simplechamp.ru",
    "Новая заявка из магазина SIMPLECHAMP", 
    "Товары: ".$basket.
    "\n\nФамилия: ".$client_surname.
    "\n\nИмя: ".$client_name.
    "\n\nПочта: ".$client_email.
    "\n\nТелефон: ".$client_tel.
    "\n\nАдрес: ".$client_address, 
    "From:a.v.frolovskii@mail.ru\r\n");

?>
