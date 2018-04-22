<?php
//supprimer une reponse
$app->delete('/api/supp_rep/{id}', function ($request, $response){ 

 require_once('dbconnect.php');

 $id=$request->getAttribute('id');

 $query= "delete from reponses where id_rep =$id";
 $result= $mysqli->query($query);
 
});
 
