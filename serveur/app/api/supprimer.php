<?php
//supprimer une question
$app->delete('/api/supp/{id}', function ($request, $response){ 
 require_once('dbconnect.php');
 $id=$request->getAttribute('id');

 $query= "delete from questions where id_ques =$id";
 $result= $mysqli->query($query);
 return $response->withHeader('Access-Control-Allow-Origin', '*')
 ->withHeader('Access-Control-Allow-Methods', 'GET, PUT, PATCH, POST, DELETE, OPTIONS')
 ->withHeader('Access-Control-Allow-Credentials', 'true')
 ->withHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With');
 
});
 
