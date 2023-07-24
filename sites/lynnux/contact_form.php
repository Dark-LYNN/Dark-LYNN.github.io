<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $fullname = $_POST["fullname"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    
    $to = "support.lynnux@gmail.com"; // Replace with your email address
    $subject = "New Contact Form Submission";
    $headers = "From: $email\r\nReply-To: $email\r\n";

    // Sending the email
    mail($to, $subject, $message, $headers);

    // Optionally, you can redirect the user to a thank you page after successful submission
    header("Location: thank_you_page.html");
    exit;
}
?>
