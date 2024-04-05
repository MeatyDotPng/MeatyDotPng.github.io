<?php
session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = trim($_POST["message"]);

    if (empty($name) OR empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        // Set a session variable with the error message
        $_SESSION['error_message'] = "Oops! There was a problem with your submission. Please complete the form and try again.";
        
        // Redirect back to the form
        header("Location: index.html");
        exit;
    }

    $recipient = "stefantolkeng6@gmail.com";
    $subject = "Contact from: $name";
    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Message:\n$message\n";
    $email_headers = "From: $name <$email>";

    if (mail($recipient, $subject, $email_content, $email_headers)) {
        $_SESSION['success_message'] = "Thank You! Your message has been sent.";
        header("Location: index.html");
    } else {
        $_SESSION['error_message'] = "Oops! Something went wrong and we couldn't send your message.";
        header("Location: index.html");
    }

} else {
    http_response_code(403);
    $_SESSION['error_message'] = "There was a problem with your submission, please try again.";
    header("Location: index.html");
}