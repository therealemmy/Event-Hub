<?php 
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset ($_POST['loginbtn'])) {
        
    $firstName = $_POST['firstName'];
    $lastName = $_POST['lastName'];
    $phoneNumber = $_POST['phoneNumber'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $confirmPassword = $_POST['confirmPassword'];

    $arrayError = array();
    if (empty($firstName) OR empty($lastName) OR empty($phoneNumber) OR empty($email) OR empty($password)) {
        array_push('All fields are required');
    }

    if ($password != $confirmPassword) {
        array_push('Passwords unmatched');
    }

    foreach($arrayError as $arrayErrors) {
        echo '<div>$arrayErrors<div>';
    }

}

?>