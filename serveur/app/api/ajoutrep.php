<?php
// post nouvelle reponse dans la base de donnée
$app->post('/api/ajoutr', function ($request, $response){ 
 require_once('dbconnect.php');
 $query = "INSERT INTO `reponses`(`text_rep`,`id_ques`, `id_uti`)VALUES(?,?,?)";
 $stmt = $mysqli->prepare($query);
 $stmt->bind_param("sss", $d, $e, $f);
    $d= $request->getParsedBody()['text_rep'];
    $e= $request->getParsedBody()['id_ques'];
    $f= $request->getParsedBody()['id_uti'];
   
       
$stmt->execute();

});










 