<?php
//database details
$host ="localhost";
$dbUsername ="root";
$dbPassword ="";
$dbname ="hackerthorn";

//creating a connection
$conn = new mysqli($host ,$dbUsername,$dbPassword,$dbname);

$emailFromURL = $_POST['email'];

if(mysqli_connect_error())
{
    die('Connect Error('.mysqli_connect_error().')'.mysqli_connect_error());
}
else
{
    $upd = "UPDATE registration SET verification = 1 WHERE email = '$emailFromURL'";
    $data = mysqli_query($conn,$upd);
    			
    if($data)
    {
        // Display the alert box 
        echo '<script>alert("Verification successful")</script>';

        //redirect to the home page
		header('location: ../Limpopo Varsity/validation-successful.html');
        
    }
}
?>