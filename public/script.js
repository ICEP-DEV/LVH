
var registrationsOpen = false; // Set to true if registrations are open, false if closed

document.getElementById("id").onkeyup = function (){
    document.getElementById("ageText").innerHTML ="";
    var id = document.getElementById("id").value;
    var uneditedDate = id.slice(0,6) ;
    var year ;
    var month =  id.slice(2,4);
    var day = id.slice(4,6) ;
    var dob;
    var sysdate = new Date();
    var  uneditedyear = uneditedDate.slice(0,2);
    var genderRatio = id.slice(6,7) ;
    var gender;
    if(!isNaN(id)){
    if(id.length==13){

    if(uneditedyear.slice(0,1).includes("0")){
        
        document.getElementById("ageText").innerHTML ="" ;
    year = 20+uneditedyear;

    if(month<=12){
        if(day<=31){
            dob = new Date(month+"/"+day+"/"+year);
        }else{
            document.getElementById("ageText").innerHTML ="*Incorrect day on the ID" ;
        }
   
    }else{
        document.getElementById("ageText").innerHTML ="*Incorrect month on the ID" ;
    }
   

    }else if(uneditedyear.slice(0,1).includes("9")||uneditedyear.slice(0,1).includes("8")){
        year = 19+uneditedyear;

        if(month<=12){
            dob = new Date(month+"/"+day+"/"+year);
            }else{
                document.getElementById("ageText").innerHTML ="*Incorrect month on the ID" ;
            }

    }
    var time_diff = sysdate.getTime()-dob.getTime();
    var days = (time_diff)/(1000*60*60*24);
    var age = Math.floor(days/365);
   
    if(genderRatio<5){
        gender = "Female";
    
    }else if(genderRatio>4){
        gender = " Male";
    }
    document.getElementById("age").value = age ;
    document.getElementById("gender").value = gender;
   
    }else{
        
        document.getElementById("ageText").innerHTML ="*Please enter 13 digits for the ID" ;
    }
}else{
    document.getElementById("ageText").innerHTML ="*ID should contain numbers only " ;
}
    
  
}


document.getElementById("studentnum").onkeyup = function (){
    var student = document.getElementById("studentnum").value;
    var institution = document.getElementById("institution").value;

    if(institution == "Tshwane University Of Technology"||institution == "University Of Venda"||institution == "University Of Limpopo"||institution == "University Of South Africa"){
    
        document.getElementById("emailText").innerHTML ="" ;


        if(institution == "Tshwane University Of Technology"){
            document.getElementById("email").value = student +"@tut4life.ac.za" ;
            if(student.length==9){
               
                document.getElementById("studentnumText").innerHTML ="" ;
            }else{

                document.getElementById("studentnumText").innerHTML ="*TUT student number must be 9 digits" ;
            }

       
           

        }else if(institution == "University Of Limpopo"){
            document.getElementById("email").value = student +"@keyaka.ul.ac.za" ;
            if(student.length==9){
                
                document.getElementById("studentnumText").innerHTML ="" ;
            }else{

                document.getElementById("studentnumText").innerHTML ="*UL student number must be 9 digits" ;
            }


    
        }else if(institution == "University Of Venda"){
            document.getElementById("email").value = student +"@mvula.univen.ac.za"  ;
            if(student.length==8){
                
                document.getElementById("studentnumText").innerHTML ="" ;
            }else{

                document.getElementById("studentnumText").innerHTML ="*UNIVEN student number must be 8 digits" ;
            }         
        
        }else if(institution == "University Of South Africa"){
            document.getElementById("email").value = student +"@mylife.unisa.ac.za"  ;
            if(student.length==8){
                
                document.getElementById("studentnumText").innerHTML ="" ;
            }else{

                document.getElementById("studentnumText").innerHTML ="*UNISA student number must be 8 digits" ;
            }         
        
        }
        
        }else{

            document.getElementById("emailText").innerHTML ="*Please choose institution" ;
        }
}

document.getElementById("institution").onchange = function (){
    var student = document.getElementById("studentnum").value;
    var institution = document.getElementById("institution").value;

    if(student==null || student==undefined){

    }else{
    document.getElementById("emailText").innerHTML ="" ;
    if(institution == "Tshwane University Of Technology"){
    document.getElementById("email").value = student +"@tut4life.ac.za" ;
    }else if(institution == "University Of Limpopo"){
    document.getElementById("email").value = student +"@keyaka.ul.ac.za" ;
    
    }else if(institution == "University Of Venda"){
        document.getElementById("email").value = student +"@mvula.univen.ac.za"  ;
    }else if(institution == "University Of South Africa"){
        document.getElementById("email").value = student +"@mylife.unisa.ac.za"  ;
    }else{

    }
}
}


function GetSelectedTextValue(other){
    var selectedValue = other.value;
    let element  = document.getElementById("otherLabel");
    if(selectedValue=="other")
    {
    document.getElementById("other").style.display = "";
    element.removeAttribute("hidden","hidden");
    }
    else
    {
    document.getElementById("other").style.display = "none";
    element.setAttribute("hidden", "hidden");
    }
    }



function check(){

    if(registrationsOpen){ 
        
        var institution = document.getElementById("institution").value;
        var id = document.getElementById("id").value;
        var name = document.getElementById("name").value;
        var surname = document.getElementById("surname").value;
        var studentnum = document.getElementById("studentnum").value;
        var department = document.getElementById("department").value;
        var level = document.getElementById("level").value;
        var role = document.getElementById("role").value;
        var btnsubmit = document.getElementById("btn");

        if((institution=="null")||(id.length!=13)||(name.trim().length <= 1)||(surname.trim().length <= 1)
        ||(studentnum.trim().length <= 1)||(department=="null")||(level=="null")||(role=="null"))
        {
        
            alert("You submitted the wrong details.");
        }else{

            
            signUp();
        
            btnsubmit.disabled = false;
        }
    }
    else { 
       
        alert("Registrations are currently closed, but check out the website for more insight.");

        // Redirect to index.html after the user clicks OK on the alert
        window.location.href = "index.html";
    
    }

}