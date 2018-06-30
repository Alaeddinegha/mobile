<?php
$app->get('/api/localisation',function($request, $response){
    require_once('dbconnect.php');

$query = "select * from geolocalisations";
$result = $mysqli->query($query);
while($row=$result->fetch_assoc()){
    $data[]=$row;
}
if (isset($data)){
    header('Content-type:application/json');
$response=(json_encode($data));
echo ("data=$response");
};


    });
