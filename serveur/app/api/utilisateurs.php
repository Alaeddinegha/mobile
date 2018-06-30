<?php
$app->get('/api/utilisateurs',function($request, $response){
    require_once('dbconnect.php');

$query = "select * from utilisateurs";
$result = $mysqli->query($query);
while($row=$result->fetch_assoc()){
    $data[]=$row;
}
if (isset($data)){
    header('Content-type:application/json');
echo (json_encode($data));
};


    });
