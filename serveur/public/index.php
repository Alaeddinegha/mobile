<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

require '../vendor/autoload.php';

$app = new \Slim\App;
require_once('../app/api/ajoutuser.php');
require_once('../app/api/utilisateurs.php');
require_once('../app/api/questions.php');
require_once('../app/api/question.php');
require_once('../app/api/ajout_ques.php');
require_once('../app/api/ajoutrep.php');
require_once('../app/api/nbr_util.php');
require_once('../app/api/supp_ques.php');
require_once('../app/api/supp_rep.php');
require_once('../app/api/log.php');
require_once('../app/api/geo.php');


$app->run();