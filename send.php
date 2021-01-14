<?php
$to = "info@vkolhoze.ru";
$from = "info@vkolhoze.ru";
$first_name = "Имя: " . $_POST['name'] . "";
$subject = "Заявка на проект";
$subject2 = "Copy of your form submission";
$message = $first_name . "" . "\nНомер телефона: " . $_POST['phone'] . "\nE-Mail: " . $_POST['email'] . "";

$headers = "From:" . $from;
$headers2 = "From:" . $to;

mail($to, $subject, $message, $headers);

if (mail($to, $subject, $message, $headers)) {
    echo 'Успешно, ожидайте ответа оператора!';
}
else {
    echo 'Произошла ошибка';
}