<?php

function cleanup($value){
    $value = htmlspecialchars($value);
    $value = urldecode($value);
    $value = trim($value);
    return $value;
}

$product = cleanup($_POST['basket__tbody-name']);
$surname = cleanup($_POST['basket-surname']);
$name = cleanup($_POST['basket-name']);
$email = cleanup($_POST['basket-email']);
$tel = cleanup($_POST['basket-tel']);
$address = cleanup($_POST['basket-address']);

mail("info@simplechamp.ru", 
    "Новая заявка с сайта simplechamp.ru", 
    "Товары: ".$product.
    "\n\nФамилия: ".$surname.
    "\n\nИмя: ".$name.
    "\n\nПочта: ".$email.
    "\n\nТелефон: ".$tel.
    "\n\nАдрес: ".$address, 
    "From: info@simplechamp.ru \r\n");

?>
