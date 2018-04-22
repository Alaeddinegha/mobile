<?php
//supprimer une question
$app->delete('/api/supp/{id}', function ($request, $response){ 

 require_once('dbconnect.php');

 $id=$request->getAttribute('id');

 $query= "delete from questions where id_ques =$id";
 $result= $mysqli->query($query);
 
});
 
