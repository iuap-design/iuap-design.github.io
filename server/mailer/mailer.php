<?php
/**
 * Send a JSON response back to an Ajax request, indicating depend on $success param.
 *
 * @param bool $success Default is TRUE (success request).
 * @param string $data Default is no data.
 */
function send_json( $success = true, $data = '') {
    $response = array('success' => $success);
    if ( ! empty($data)) {
        $response['data'] = $data;
    }
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode($response);
    die;
}

/**
 * Simple validation after filter_input() function, to keep code clean.
 *
 * @param string $name
 * @param string $email
 * @param string $message
 */
function validate($name, $email, $message) {
    $errors = array();
    if (null == $name) {
        $errors['name'] = 'Enter your name';
    }
    if (null == $email || false === $email) {
        $errors['email'] = 'Enter correct email';
    }
    if (null == $message) {
        $errors['message'] = 'Enter your message';
    }
    // If errors - die
    if ( ! empty($errors)) {
        send_json(false, $errors);
    }
}

if (empty($_POST)) {
    exit;
}

// Load Config file
$ini = dirname(__FILE__) . DIRECTORY_SEPARATOR . 'config.ini';
$config = parse_ini_file( $ini );

// Receive and validate data
$name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING );
$email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);
$message = filter_input(INPUT_POST, 'message', FILTER_SANITIZE_STRING);
// Do validate
validate($name, $email, $message);

// If validate success
$message = wordwrap($message, 70);

// Send email
$to = $config['to'];
$subject = $config['subject'];

// From and Reply-To are the same
$from = sprintf( '%1$s <%2$s>', $name, $email);

$headers = array();
$headers[] = sprintf('From: %s', $from);
$headers[] = sprintf('Reply-To: %s', $from);
$headers[] = sprintf('X-Mailer: PHP/%s', phpversion());
$headers[] = 'MIME-Version: 1.0';

// Convert headers from array to string
$headers = implode("\r\n", $headers);

mail($to, $subject, $message, $headers);
send_json();