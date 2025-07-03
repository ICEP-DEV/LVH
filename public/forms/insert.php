<?php
$name = $_POST['name'];
$surname = $_POST['surname'];
$age = $_POST['age'];
$gender = $_POST['gender'];
$institution = $_POST['institution'];
$student_Num = $_POST['studentnum'];
$email = $_POST['email'];
$cellNum = $_POST['cell'];
$department = $_POST['department'];
$level = $_POST['level'];
$role = $_POST['role'];
$id = $_POST['id'];
$verification = false;
//database details
$host ="localhost";
$dbUsername ="root";
$dbPassword ="";
$dbname ="hackerthorn";



//creating a connection
$conn = new mysqli($host ,$dbUsername,$dbPassword,$dbname);


if(mysqli_connect_error())
{
    die('Connect Error('.mysqli_connect_error().')'.mysqli_connect_error());
}else{
	
	 if(empty(trim($name)) || empty(trim($surname)) ||  empty(trim($institution)) || empty(trim($student_Num))||  empty(trim($cellNum)) || 
	 empty(trim($department)) || empty(trim($id )) || empty(trim($level)) || empty(trim($role)))
	{
	 //Display the alert box 
	 echo '<script>alert("You submitted an empty space")</script>';
				
	 header('location: ../registration.html');	
	}else{
	
	 $query = "select * from registration where student_number ='$student_Num'  ";
	 $query1 = "select * from registration where id ='$id'  ";
	
	  $check = mysqli_query($conn,$query);
	  $check1 = mysqli_query($conn,$query1);
	 if(mysqli_num_rows( $check)>0){
		//redirect to the home page
		header('location: ../forms/student-exist.html');
		
			
	 
	
	 		
	  }else if((mysqli_num_rows( $check1)>0)){
		header('location: ../studentId-exist.html');
	  } else{



			if($department=="other"){
			
			$department = $_POST['other'];
			}
			$INSERT = "INSERT INTO  registration
            VALUES('$institution', '$id','$name','$surname','$age', '$gender','$student_Num','$email','$cellNum','$department','$level','$role ','$verification')";

            $data = mysqli_query($conn,$INSERT);
			
			
			if($data)
			{
				
				// Display the alert box 
				echo '<script>alert("Registration successful")</script>';

				//echo '<script>signUp()</script>';
				
				//redirect to the home page
				header('location: ../forms/registration-successful.html');	
				
			}
	}
	
	
	}

}

?>