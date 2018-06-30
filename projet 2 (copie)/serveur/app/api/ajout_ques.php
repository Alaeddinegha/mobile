<?php
// post nouvelle questions dans la base de donnée
$app->post('/api/ajoutq', function ($request){ 
 
 require_once('dbconnect.php');

 $query = "INSERT INTO `questions`(id_ques, id_uti, text) VALUES(?,?,?)";
 $stmt = $mysqli->prepare($query);
 
 $stmt->bind_param("sss",$a, $b,$c);
   
    $b= $request->getParsedBody()['id_uti'];
    $c= $request->getParsedBody()['text'];
  
  
$stmt->execute();


  });










 
