<?php
// post nouvelle reponse dans la base de donnée
$app->post('/api/ajoutr', function ($request, $response){ 
 require_once('dbconnect.php');
 $query = "INSERT INTO `reponses`(id_rep,text_rep,id_ques, id_uti) VALUES(?,?,?,?)";
 $stmt = $mysqli->prepare($query);
 
 $stmt->bind_param("ssss",$a,$b,$c,$d);
    $b= $request->getParsedBody()['text_rep'];
    $c= $request->getParsedBody()['id_ques'];
    $d= $request->getParsedBody()['id_uti'];
    
$stmt->execute();

});










 