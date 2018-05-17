<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

require '../vendor/autoload.php';

$app = new \Slim\App;

require_once('../app/api/users.php');
require_once('../app/api/questions.php');

require_once('../app/api/question.php');
require_once('../app/api/ajout_ques.php');
require_once('../app/api/ajoutrep.php');
require_once('../app/api/nbr_rep.php');
require_once('../app/api/supp_ques.php');
require_once('../app/api/supp_rep.php');
require_once('../app/api/log.php');

$app->run();