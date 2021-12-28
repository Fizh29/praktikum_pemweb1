
    function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "ahmad2017" && password == "integrity"){
alert ("Login successfully");
window.location = "success.html";
}else {
    alert ("failed to login")
    document.getElementById("form_id").reset()
    
}
}
