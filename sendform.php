<?php

$ip = getenv("REMOTE_ADDR");
$adddate = date("D M d, Y g:i a");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];

    $to = 'adewumilanre01@gmail.com';

    $subject = 'Form Message';
    $body = "Name: $name\nEmail: $email\nPhone: $phone\nMessage:\n$message\nIP: $ip\nDate: $adddate";
    $headers = 'From: ' . $email;

    if (mail($to, $subject, $body, $headers)) {
        http_response_code(200);
        echo '<script>alert("Message sent successfully!");</script>';
    } else {
        http_response_code(500);
        echo '<script>alert("Failed to send message. Please try again later.");</script>';
    }
} else {
    http_response_code(405);
}

?>
