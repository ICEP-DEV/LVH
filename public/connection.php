<?php 
//objects needed to create a database
$host="localhost";
$username ="root";
$user_pass="";
$database_in_use ="hackerthorn";


//instance
$conn =  new mysqli($host,$username,$user_pass,$database_in_use);
if($conn -> connect_error)
{
die("Connection failed:". $conn-> connect_error);
}
?>