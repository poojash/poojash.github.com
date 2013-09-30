<?php
	if(isset($_POST['Email'])){

	$subject = 'Website form enquiry '; // Subject of your email
	$to = 'shyamfa@gmail.com';
	 
	
	$headers = "From: " . $_REQUEST['Email'] . "\r\n"; // Sender's E-mail
	$headers .= "MIME-Version: 1.0\r\n";
	$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
	$message = 'Name: ' . $_REQUEST['Name'] . "<br>";
	$message .= 'Email: ' . $_REQUEST['Email'] . "<br>";
	$message .= 'Message: ' .$_REQUEST['Message'];
	 
	if (mail($to, $subject, $message, $headers))
	{
	
	 echo 'ok';
	}
	else
	{
	
	 echo '';
	}

}

?> 