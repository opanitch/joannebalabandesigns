<?php
	$name = $_POST["contactName"];
	$email = $_POST["contactEmail"];
	$message = $_POST["contactMessage"];
	
    $to = "joanne@joannebalabandesigns.com";
    // testing
    // $to = "oreokid200@gmail.com";
	$from = "From: " . $email;
	$subject = "**Inquiry** - Joanne Balaban Designs";
	$body = "Submited Information:\n\nName: " . $name . "\nEmail Address: " . $email . "\n\nMessage:\n\t" . $message;
    
    if (!empty($email)) {
        $sent = mail($to, $subject, $body, $from);
        if(!$sent) {
            http_response_code(500);
        } else {
            http_response_code(200);
        }
    }
?>