<?php 
session_start();
require_once('classes/actions.class.php');
$actionClass = new Actions();
$action = $_GET['action'] ?? "";
$response = [];
header('Access-Control-Allow-Origin: http://localhost:3003');
switch($action){
    case 'save_class':
        $response = $actionClass->save_class();
        break;
    case 'delete_class':
        $response = $actionClass->delete_class();
        break;
    case 'save_student':
        $response = $actionClass->save_student();
        break;
    case 'delete_student':
        $response = $actionClass->delete_student();
        break;
    case 'save_attendance':
        $response = $actionClass->save_attendance();
        break;       
    case 'list_student':
        $response = $actionClass->list_student();
        break;
    default:
        $response = ["status" => "error", "msg" => "Undefined API Action!"];
        break;
}

echo json_encode($response);
?>