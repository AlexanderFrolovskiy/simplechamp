<?php
$name = $_POST['name'];
$tel = $_POST['tel'];
$email = $_POST['email'];
$comment = $_POST['comment'];

$name = htmlspecialchars($name);
$email = htmlspecialchars($email);
$comment = htmlspecialchars($comment);
$name = urldecode($name);
$email = urldecode($email);
$comment = urldecode($comment);
$name = trim($name);
$email = trim($email);
$comment = trim($comment);

mail("a.v.frolovskii@gmail.ru", 
    "Заявка с сайта SimpleChamp.ru", 
    "Имя: ".$name.
    "\n\nТелефон: ".$tel.
    "\n\nПочта: ".$email.
    "\n\nКомментарий: ".$comment, 
    "From: info@simplechamp.ru \r\n");
?>
