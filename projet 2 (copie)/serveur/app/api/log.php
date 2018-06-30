<?php
$app->post('/api/login',function($request, $response)
    {
        require_once('dbconnect.php');
     
        $log= $request->getParsedBody()['login'];
        $pw= $request->getParsedBody()['pw'];
      
                $query = "SELECT * FROM `utilisateurs` WHERE login='$log' and pw='$pw'";
        
$result = $mysqli->query($query);
while($row=$result->fetch_assoc()){
    $data[]=$row;

}
if (isset($data)){
    header('Content-type:application/json');
echo(json_encode($data));
}
else
{echo("faux");}
    });


       
 