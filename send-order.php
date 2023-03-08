<?php

function cleanup($value){
    $value = htmlspecialchars($value);
    $value = urldecode($value);
    $value = trim($value);
    return $value;
}

$products = [
    1001 => [
        "name" => "Ножи для метания СМН+"
    ],
    1002 => [
        "name" => "Ножи для метания СМН"
    ],
    1003 => [
        "name" => "Гравировка на ножах"
    ],  
    2001 => [
        "name" => "Чехол ЦИФРА РФ на 3 ножа"
    ],    
    2002 => [
        "name" => "Чехол МУЛЬТИКАМ на 3 ножа"
    ],
    2003 => [
        "name" => "Чехол ЧЕРНЫЙ на 3 ножа"
    ],
    2004 =>  [
        "name" => "Чехол АТАКС на 3 ножа"
    ],        
    2005 => [
       "name" => "Чехол ОРАНЖ на 3 ножа"
    ],    
    2006 => [
        "name" => "Чехол ХАКИ на 3 ножа"
    ],    
    2007 => [
        "name" => "Чехол АТАКС ГРИН на 3 ножа"
    ],
    2008 => [
        "name" => "Кожаный чехол V1 на 3 ножа"
    ],
    2009 => [
        "name" => "Кожаный чехол V2 на 3 ножа"
    ],  
    3001 => [
        "name" => "Медальница Движемся вперед"
    ],    
    3002 => [
        "name" => "Рамки для номеров"
    ],
    3003 => [
        "name" => "Напильник с алмазной крошкой"
    ],    
    4001 => [
        "name" => "Стенд для метания 75"
    ],
    4002 => [
        "name" => "Стенд для метания 60"
    ],    
    4003 => [
        "name" => "Мишень для метания А3 (36х32см)"
    ],    
    4004 => [
        "name" => "Мишень для метания А4 (22х18см)"
    ]    
];


$product = json_decode($_POST["basket_products"], true);
$product_surname = $_POST["basket_surname"];
$product_name = cleanup($_POST["basket_name"]);
$product_email = cleanup($_POST["basket_email"]);
$product_tel = cleanup($_POST["basket_tel"]);
$product_address = cleanup($_POST["basket_address"]);

$basket = "";

foreach($product as $p) {
    $product_id = $p["id"];
    $name = $products[$product_id]["name"];
    $count = strval($p["count"]);
    $basket .=  $name . ", ". "кол-во: " . $count . "\n"; 
}

mail("a.v.frolovskii@yandex.ru",
    "Новая заявка из магазина SIMPLECHAMP", 
    "Товары:\n".$basket.
    "\nФамилия: ".$product_surname.
    "\n\nИмя: ".$product_name.
    "\n\nПочта: ".$product_email.
    "\n\nТелефон: ".$product_tel.
    "\n\nАдрес: ".$product_address, 
    "From:info@simplechamp.ru");
?>
