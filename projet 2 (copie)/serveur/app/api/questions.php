<?php

$app->get('/api/questions',function($request, $response){
    require_once('dbconnect.php');
        
$query = "select * from questions,utilisateurs where questions.id_uti=utilisateurs.id_uti";
$result = $mysqli->query($query);
while($row=$result->fetch_assoc()){
    $data[]=$row;
}
if (isset($data)){
    header('Content-type:application/json');
echo(json_encode($data));
};

/*select id_ques,text  ,date ,prenom , photo from questions,utilisateurs where questions.id_uti=utilisateurs.id_uti
return $response->withHeader('Access-Control-Allow-Origin', '*')
            ->withHeader('Access-Control-Allow-Methods', 'GET, PUT, PATCH, POST, DELETE, OPTIONS')
            ->withHeader('Access-Control-Allow-Credentials', 'true')
            ->withHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With');
           id_ques,text,date ,prenom,photo
            */ 
    });

