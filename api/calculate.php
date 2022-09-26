<?php

$raw_http_body_data = file_get_contents('php://input'); //get http body

error_log("raw_http_body_data: " . $raw_http_body_data); //write into server error log 

header("Content-Type: application/json; charset=UTF-8"); //response header - content type 

$amount = 0;
$rate = 0;

if (isset($raw_http_body_data)) {

    $json_data = json_decode($raw_http_body_data);

    $amount = $json_data->amount;
    $rate = $json_data->rate;

    $tax = ($amount * $rate) / 100;

    $total = $amount + $tax;

} else {
    error_log("expected some HTML body in this request, defaulting to zero");
}


$response = array(
    "tax" => $tax,
    "total" => $total
);

echo json_encode($response);