var img ;
var registerationForm= document.createElement("form");
var loginForm= document.createElement("form");
var userNameRegistration = document.createElement("input");
var gender
var emailLogin = document.createElement("input");
function index(){
    var labels = document.getElementsByTagName('label');
    userNameRegistration.type="text";
    userNameRegistration.placeholder="enter your name";
    registerationForm.appendChild(userNameRegistration);
    console.log(registerationForm);
    //img = document.getElementById("img");
    //console.log(img);
    document.getElementById("registrationLink").addEventListener("click",function(){
        /*console.log(document.getElementsByClassName("formContainer")[0]);
        if(document.getElementsByClassName("formContainer")[0].firstElementChild==loginForm){
            document.getElementsByClassName("formContainer")[0].removeChild(loginForm)
        }
        else{
            document.getElementsByClassName("formContainer")[0].innerHTML="";
        }
        document.getElementsByClassName("formContainer")[0].appendChild(registerationForm);*/
        document.getElementById("loginForm").style="display:none;"
        document.getElementById("registerationForm").style="display:inline-block;"

    })
    document.getElementById("logInLink").addEventListener("click",function(){
       /* emailLogin.type="email";
        emailLogin.placeholder="enter your mail";
        loginForm.appendChild(emailLogin);
        console.log(document.getElementsByClassName("formContainer")[0]);
        if(document.getElementsByClassName("formContainer")[0].firstElementChild==registerationForm){
            document.getElementsByClassName("formContainer")[0].removeChild(registerationForm)
        }
        else{
            document.getElementsByClassName("formContainer")[0].innerHTML="";
        }
        document.getElementsByClassName("formContainer")[0].innerHTML="";
        document.getElementsByClassName("formContainer")[0].appendChild(loginForm)*/
        document.getElementById("registerationForm").style="display:none;"
        document.getElementById("loginForm").style="display:inline-block;"
    })
    document.getElementById("userName").addEventListener("focus",function(){
        for (let i = 0; i < labels.length; i++) {
            if (labels[i].htmlFor == 'userName') {
              labels[i].style="display:inline-block";
           }
        }
    })
    document.getElementById("userName").addEventListener("blur",function(){
        for (let i = 0; i < labels.length; i++) {
            if (labels[i].htmlFor == 'userName') {
              labels[i].style="display:none";
           }
        }
    })
    document.getElementById("email").addEventListener("focus",function(){
        for (let i = 0; i < labels.length; i++) {
            if (labels[i].htmlFor == 'email') {
              labels[i].style="display:inline-block";
           }
        }
    })
    document.getElementById("email").addEventListener("blur",function(){
        for (let i = 0; i < labels.length; i++) {
            if (labels[i].htmlFor == 'email') {
              labels[i].style="display:none";
           }
        }
    })
    document.getElementById("phone").addEventListener("focus",function(){
        for (let i = 0; i < labels.length; i++) {
            if (labels[i].htmlFor == 'phone') {
              labels[i].style="display:inline-block";
           }
        }
    })
    document.getElementById("phone").addEventListener("blur",function(){
        for (let i = 0; i < labels.length; i++) {
            if (labels[i].htmlFor == 'phone') {
              labels[i].style="display:none";
           }
        }
    })
    document.getElementById("password").addEventListener("focus",function(){
        for (let i = 0; i < labels.length; i++) {
            if (labels[i].htmlFor == 'password') {
              labels[i].style="display:inline-block";
           }
        }
    })
    document.getElementById("password").addEventListener("blur",function(){
        for (let i = 0; i < labels.length; i++) {
            if (labels[i].htmlFor == 'password') {
              labels[i].style="display:none";
           }
        }
    })
    document.getElementById("emailLogin").addEventListener("focus",function(){
        for (let i = 0; i < labels.length; i++) {
            if (labels[i].htmlFor == 'emailLogin') {
              labels[i].style="display:inline-block";
           }
        }
    })
    document.getElementById("emailLogin").addEventListener("blur",function(){
        for (let i = 0; i < labels.length; i++) {
            if (labels[i].htmlFor == 'emailLogin') {
              labels[i].style="display:none";
           }
        }
    })
    document.getElementById("passwordLogin").addEventListener("focus",function(){
        for (let i = 0; i < labels.length; i++) {
            if (labels[i].htmlFor == 'passwordLogin') {
              labels[i].style="display:inline-block";
           }
        }
    })
    document.getElementById("passwordLogin").addEventListener("blur",function(){
        for (let i = 0; i < labels.length; i++) {
            if (labels[i].htmlFor == 'passwordLogin') {
              labels[i].style="display:none";
           }
        }
    })
}
