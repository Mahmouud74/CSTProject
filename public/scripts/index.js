var img ;
var registerationForm= document.createElement("form");
var loginForm= document.createElement("form");
var userNameRegistration = document.createElement("input");
var gender
var emailLogin = document.createElement("input");
function index(){
    var playerImg=document.getElementById("playerImg");
    let imgPosition = (getComputedStyle(playerImg).left);
    let imgLocation = parseInt(imgPosition)
    setTimeout(function(){
        playerImg.style.display="inline-block";
        setTimeout(function(){
            document.getElementById("introDesc").firstElementChild.style.display="inline-block";
            setTimeout(function(){
                document.getElementById("introDesc").firstElementChild.nextElementSibling.nextElementSibling.style.display="inline-block";
            },200)
            setTimeout(function(){
                document.getElementById("introDesc").firstElementChild.nextElementSibling.nextElementSibling.style.display="inline-block";
                setTimeout(function(){
                    document.getElementById("introDesc").firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.style.display="inline-block";
                },200)
            },200)
            
        },500)
    },200)

    /*  var displayPlayerImg = setInterval(function(){
     if(imgLocation==750){
        document.getElementById("introDesc").style="display:inline-block"
        clearInterval=displayPlayerImg
     }
     else{
        imgLocation+=250
        playerImg.style.left=imgLocation+"px";
     }
        
    },200)*/
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
        document.getElementById("loginForm").style="display:none;";
        document.getElementById("registerationForm").style="display:inline-block;";
        document.getElementById("login").style.borderBottom="none";
        document.getElementById("register").style.borderBottom="2px solid rgb(251, 57, 73)";
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
        document.getElementById("registerationForm").style="display:none;";
        document.getElementById("loginForm").style="display:inline-block;";
        document.getElementById("register").style.borderBottom="none";
        document.getElementById("login").style.borderBottom="2px solid rgb(251, 57, 73)";
    })
    document.getElementById("userName").addEventListener("focus",function(){
        for (let i = 0; i < labels.length; i++) {
            if (labels[i].htmlFor == 'userName') {
              labels[i].style="visibility:visible";
           }
        }
    })
    document.getElementById("userName").addEventListener("blur",function(){
        for (let i = 0; i < labels.length; i++) {
            if (labels[i].htmlFor == 'userName') {
              labels[i].style="visibility:hidden";
           }
        }
    })
    document.getElementById("email").addEventListener("focus",function(){
        for (let i = 0; i < labels.length; i++) {
            if (labels[i].htmlFor == 'email') {
              labels[i].style="visibility:visible";
           }
        }
    })
    document.getElementById("email").addEventListener("blur",function(){
        for (let i = 0; i < labels.length; i++) {
            if (labels[i].htmlFor == 'email') {
              labels[i].style="visibility:hidden";
           }
        }
    })
    document.getElementById("phone").addEventListener("focus",function(){
        for (let i = 0; i < labels.length; i++) {
            if (labels[i].htmlFor == 'phone') {
              labels[i].style="visibility:visible";
           }
        }
    })
    document.getElementById("phone").addEventListener("blur",function(){
        for (let i = 0; i < labels.length; i++) {
            if (labels[i].htmlFor == 'phone') {
              labels[i].style="visibility:hidden";
           }
        }
    })
    document.getElementById("password").addEventListener("focus",function(){
        for (let i = 0; i < labels.length; i++) {
            if (labels[i].htmlFor == 'password') {
              labels[i].style="visibility:visible";
           }
        }
    })
    document.getElementById("password").addEventListener("blur",function(){
        for (let i = 0; i < labels.length; i++) {
            if (labels[i].htmlFor == 'password') {
              labels[i].style="visibility:hidden";
           }
        }
    })
    document.getElementById("emailLogin").addEventListener("focus",function(){
        for (let i = 0; i < labels.length; i++) {
            if (labels[i].htmlFor == 'emailLogin') {
              labels[i].style="visibility:visible";
           }
        }
    })
    document.getElementById("emailLogin").addEventListener("blur",function(){
        for (let i = 0; i < labels.length; i++) {
            if (labels[i].htmlFor == 'emailLogin') {
              labels[i].style="visibility:hidden";
           }
        }
    })
    document.getElementById("passwordLogin").addEventListener("focus",function(){
        for (let i = 0; i < labels.length; i++) {
            if (labels[i].htmlFor == 'passwordLogin') {
              labels[i].style="visibility:visible";
           }
        }
    })
    document.getElementById("passwordLogin").addEventListener("blur",function(){
        for (let i = 0; i < labels.length; i++) {
            if (labels[i].htmlFor == 'passwordLogin') {
              labels[i].style="visibility:hidden";
           }
        }
    })
    document.getElementById("register").addEventListener("click",function(){
        document.getElementById("loginForm").style="display:none;"
        document.getElementById("registerationForm").style="display:inline-block;"
        document.getElementById("login").style.borderBottom="none";
        this.style.borderBottom="2px solid rgb(251, 57, 73)";
        event.preventDefault();
    })
    document.getElementById("login").addEventListener("click",function(){
        document.getElementById("registerationForm").style="display:none;"
        document.getElementById("loginForm").style="display:inline-block;"
        document.getElementById("register").style.borderBottom="none";
        this.style.borderBottom="2px solid rgb(251, 57, 73)";
        event.preventDefault();
    })
}
