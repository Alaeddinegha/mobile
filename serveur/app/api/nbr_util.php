<?php

$app->get('/api/nbr_u',function($request, $response){
    require_once('dbconnect.php');
        
$query = "SELECT COUNT(id_uti) AS S FROM utilisateurs";
$result = $mysqli->query($query);
while($row=$result->fetch_assoc()){
    $data[]=$row;
}
if (isset($data)){
    header('Content-type:application/json');
echo(json_encode($data));
};
});