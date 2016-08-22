<?php
require 'vendor/autoload.php';
$app = new \Slim\Slim(array(
    'templates.path' => 'templates'
));

$app->get('/', function () use ($app) {
    $app->render('show.php',array('id' =>"sdfd"));
});

$app->get('/hello', function () use ($app) {
    $app->render('show.php',array('id' =>"sdfd"));
});
$app->get('/users', 'getUsers');
$app->get('/users/:id', 'getUsersbyid');
$app->post('/users', 'PutUsers');

$app->run();

function getUsers() {
  //$aRequest =json_decode(file_get_contents("php://input"));
  //$id=$aRequest->userId;
  //echo $id;
  //var_dump($aRequest);
  $sql = "select * FROM user ORDER BY id";
  try {
    $db = getConnection();
    $stmt = $db->query($sql);  
    $wines = $stmt->fetchAll(PDO::FETCH_OBJ);
    $db = null;
    echo json_encode($wines);
  } catch(PDOException $e) {
    echo '{"error":{"text":'. $e->getMessage() .'}}'; 
  }
}


function getUsersbyid($id) {
  //$aRequest =json_decode(file_get_contents("php://input"));
  //$id=$aRequest->userId;
  //echo $id;
  //var_dump($aRequest);
  $sql = "select * FROM user WHERE id=".$id;
  try {
    $db = getConnection();
    $stmt = $db->query($sql);  
    $wines = $stmt->fetchAll(PDO::FETCH_OBJ);
    $db = null;
    echo json_encode($wines);
  } catch(PDOException $e) {
    echo '{"error":{"text":'. $e->getMessage() .'}}'; 
  }
}


function PutUsers(){
  $aRequest =json_decode(file_get_contents("php://input"));
  //echo $aRequest->user_email;
  //echo $aRequest[0];
  //var_dump($_POST['user_name']);
  //echo $t;
  //var_dump($t);
  //echo $_POST['user_name'];
  //  $request = Slim::getInstance()->request();
  // $user = json_decode($request->getBody());
  //  //$app->request->get('paramName');
  $sql = "INSERT INTO user (user_name,user_email,user_password,type) VALUES (:username, :email, :password, :type)";
  try {
    $db = getConnection();
    $stmt = $db->prepare($sql);  
    $stmt->bindParam("username", $aRequest->user_name);
    $stmt->bindParam("email", $aRequest->user_email);
    $stmt->bindParam("password", $aRequest->user_password);
    $stmt->bindParam("type", $aRequest->type);
    $stmt->execute();
    $user= $db->lastInsertId();
    $db = null;
    echo $user; 
  } catch(PDOException $e) {
    echo '{"error":{"text":'. $e->getMessage() .'}}'; 
  }
}




function getConnection() {
  $dbhost="localhost";
  $dbuser="root";
  $dbpass="";
  $dbname="virtual_doctor";
  $dbh = new PDO("mysql:host=$dbhost;dbname=$dbname", $dbuser, $dbpass);  
  $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  return $dbh;
}
?>