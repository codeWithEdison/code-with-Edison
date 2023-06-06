function contactMe(){
    var result = true;
    var name = document.getElementById("name").value;
    var email = document.getElementById("mail").value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("query").value; 
    if(name = ""){
        alert("name missing!");
        result = false;
    }
 if(email = ""){
    alert("email missing!!");
    result = false;
 }   
 if(phone = ""){
    alert("phone is missing!");
    result = false;
 }
 var atpas;
 if(email != "")
 atpas = email.indexof("@");
 else
 atpas = -1;
 if(atpas < 0){
    alert("email adress is incorrect!");
    result = false;
 }
 return result;

}