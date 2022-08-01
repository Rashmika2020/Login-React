<?php

require "connect.php";
header("Access-Control-Allow-Origin:http://localhost:3000");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type:application/json; charset=UTF-8");
header("Access-Control-Allow-Headers:Content-Type
          Access-Control-Allow-Headers,Authorization, X-Requested-with");

 $data=json_decode(file_get_contents("php://input"));

 $username=$data->username;
 $name=$data->name;
 $password=$data->password;
 $email=$data->email;


//  $con = mysqli_connect("localhost:3306","root","");
//  mysqli_select_db($con,"react-login");

 $sql="insert into register(
   username,
   name,
   password
   email
)
 
 values(
     '$username',
     '$name',
     '$password',
     '$email'
     
 )";

 $result = mysqli_query($con,$sql);

 if($result){
 	$response['data']=array(
            'status'=>'valid'
 	);
 	echo json_encode($response);
 }

 else{
 	$response['data']=array(
            'status'=>'invalid'
 	);
 	echo json_encode($response);
 }
 ?>