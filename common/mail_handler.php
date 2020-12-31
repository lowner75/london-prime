<?php

	// Mail handler ...
	if($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['new_message'])) {

		// Retrieve data from POST ...
		if(isset($_POST['first_name'])) { $first_name = $_POST['first_name']; }
		if(isset($_POST['last_name'])) { $last_name = $_POST['last_name']; }
		if(isset($_POST['telephone'])) { $telephone = $_POST['telephone']; }
		if(isset($_POST['email'])) { $email = $_POST['email']; }
		if(isset($_POST['message'])) { $message = $_POST['message']; }
		$date_time = date("Y/m/d H-i-s");
		$ip_address = $_SERVER['REMOTE_ADDR'];

		// Generate e-mail ...
		$to = "info@londonprimeltd.com";
		$subject = "London Prime - New Enquiry Received";
		$body = file_get_contents("email-template.php");
		$body = str_replace("#first_name#", $first_name, $body);
		$body = str_replace("#last_name#", $last_name, $body);
		$body = str_replace("#telephone#", $telephone, $body);
		$body = str_replace("#email#", $email, $body);
		$body = str_replace("#message#", $message, $body);
		$body = str_replace("#ip_address#", $ip_address, $body);
		$body = str_replace("#date_time#", $date_time, $body);

		// Headers (note: content type required for HTML formatted e-mails) ...
		$headers = "MIME-Version: 1.0" . "\r\n";
		$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
		$headers .= "From: London Prime <info@londonprimeltd.com>\r\nBcc: info@lp-digital.co.uk";

		// Send e-mail...
		mail($to, $subject, $body, $headers);

	}

?>