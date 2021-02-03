<?php
	$error = $_POST["error"];
	$name = $_POST["name"];
	$email = $_POST["email"];
	$phone = $_POST["phone"];
	$message = $_POST["message"];
	
	$to = "admin@anatomidesign.com";
	$from = "From: ".$email;
	$subject = "**Email Error** - Joanne Balaban Designs";
	$body = "Received error: ".$error."\n\nSubmited Information:\n\nName: ".$name."\nEmail Address: ".$email."\nPhone Number: ".$phone."\n\nMessage:\n\t".$message;
	
	mail($to, $subject, $body, $from);
?>