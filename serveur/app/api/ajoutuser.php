<?php
// post nouvelle questions dans la base de donnée
$app->post('/api/ajoutus', function ($request){ 
 
 require_once('dbconnect.php');

 $query = "INSERT INTO `utilisateurs`(id_uti,nom,prenom,email,adresse,photo,age,login,pw) VALUES(?,?,?,?,?,?,?,?,?)";
 $stmt = $mysqli->prepare($query);
 $b= $request->getParsedBody()['nom'];
 $c= $request->getParsedBody()['prenom'];
 $d= $request->getParsedBody()['email'];
 $e= $request->getParsedBody()['adresse'];
 $f= $request->getParsedBody()['photo'];
 $g= $request->getParsedBody()['age'];
 $h= $request->getParsedBody()['login'];
 $i= $request->getParsedBody()['pw'];
 $stmt->bind_param("sssssssss",$a,$b,$c,$d,$e,$f,$g,$h,$i);
 
$stmt->execute();


  });










 










/*post nouvelle questions dans la base de donnée
$app->post('/api/ajoutq', function ($request){ 
 
 require_once('dbconnect.php');

 $query = "INSERT INTO `questions`(`id_ques`,`text_ques`, `id_uti`) VALUES(?,?,?)";
 $stmt = $mysqli->prepare($query);
 $stmt->bind_param("sss",$a, $b, $c);
  
    $b= $request->getParsedBody()['text_ques'];
    $c= $request->getParsedBody()['id_uti'];


$stmt->execute();


  });

*/








 
