var img ;
var registerationForm= document.createElement("form");
var loginForm= document.createElement("form");
var userNameRegistration = document.createElement("input");
var gender
var emailLogin = document.createElement("input");
var nameRegex = /[a-zA-Z]{1,}/;
var emailRegex = /^[a-zA-z]+@+[a-zA-z]+\.+[a-zA-z]{3}$/;
var mobileRegex = /^(011|012|015|010)[0-9]{8}$/;
var passwordRegex = /([a-zA-z0-9@]){8,}/;
var userNameInput;
var emailInput;
var phoneInput;
var passwordInput;
var emailLoginInput;
var passwordLoginInput;
var smallImageArray;
function index(){
    userNameInput=document.getElementById("userName");
    emailInput=document.getElementById("email");
    phoneInput=document.getElementById("phone");
    passwordInput=document.getElementById("password");
    emailLoginInput =document.getElementById("emailLogin");
    passwordLoginInput=document.getElementById("passwordLogin");
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
    var labels = document.getElementsByTagName('label');

    document.getElementById("registrationLink").addEventListener("click",function(){
    
        document.getElementById("loginForm").style="display:none;";
        document.getElementById("registerationForm").style="display:inline-block;";
        document.getElementById("login").style.borderBottom="none";
        document.getElementById("register").style.borderBottom="2px solid rgb(251, 57, 73)";
    })
    document.getElementById("logInLink").addEventListener("click",function(){

        document.getElementById("registerationForm").style="display:none;";
        document.getElementById("loginForm").style="display:inline-block;";
        document.getElementById("register").style.borderBottom="none";
        document.getElementById("login").style.borderBottom="2px solid rgb(251, 57, 73)";
    })
    console.log(userNameInput);
    userNameInput.addEventListener("focus",function(){
        for (let i = 0; i < labels.length; i++) {
            if (labels[i].htmlFor == 'userName') {
              labels[i].style="visibility:visible";
           }
        }
    })
    userNameInput.addEventListener("blur",function(){
        if(document.getElementById("userNameCheckMark").style.display!="inline"){
                    for (let i = 0; i < labels.length; i++) {
            if (labels[i].htmlFor == 'userName') {
              labels[i].style="visibility:hidden";
           }
        }
        }

    })
    emailInput.addEventListener("focus",function(){
        for (let i = 0; i < labels.length; i++) {
            if (labels[i].htmlFor == 'email') {
              labels[i].style="visibility:visible";
           }
        }
    })
    emailInput.addEventListener("blur",function(){
        if(document.getElementById("emailCheckMark").style.display!="inline"){
            for (let i = 0; i < labels.length; i++) {
                if (labels[i].htmlFor == 'email') {
                  labels[i].style="visibility:hidden";
               }
            }
        }

    })
    phoneInput.addEventListener("focus",function(){
        for (let i = 0; i < labels.length; i++) {
            if (labels[i].htmlFor == 'phone') {
              labels[i].style="visibility:visible";
           }
        }
    })
    phoneInput.addEventListener("blur",function(){
        if(document.getElementById("phoneCheckMark").style.display!="inline"){
            for (let i = 0; i < labels.length; i++) {
                if (labels[i].htmlFor == 'phone') {
                  labels[i].style="visibility:hidden";
               }
            }
        }

    })
    passwordInput.addEventListener("focus",function(){
        for (let i = 0; i < labels.length; i++) {
            if (labels[i].htmlFor == 'password') {
              labels[i].style="visibility:visible";
           }
        }
    })
    passwordInput.addEventListener("blur",function(){
        if(document.getElementById("passwordCheckMark").style.display!="inline"){
            for (let i = 0; i < labels.length; i++) {
                if (labels[i].htmlFor == 'password') {
                  labels[i].style="visibility:hidden";
               }
            }
        }

    })
    emailLoginInput.addEventListener("focus",function(){
        for (let i = 0; i < labels.length; i++) {
            if (labels[i].htmlFor == 'emailLogin') {
              labels[i].style="visibility:visible";
           }
        }
    })
    emailLoginInput.addEventListener("blur",function(){
        if(document.getElementById("emailLoginCheckMark").style.display!="inline"){
            for (let i = 0; i < labels.length; i++) {
                if (labels[i].htmlFor == 'emailLogin') {
                  labels[i].style="visibility:hidden";
               }
            }
        }

    })
    passwordLoginInput.addEventListener("focus",function(){
        for (let i = 0; i < labels.length; i++) {
            if (labels[i].htmlFor == 'passwordLogin') {
              labels[i].style="visibility:visible";
           }
        }
    })
    passwordLoginInput.addEventListener("blur",function(){
        if(document.getElementById("passwordLoginCheckMark").style.display!="inline"){    
            for (let i = 0; i < labels.length; i++) {
                if (labels[i].htmlFor == 'passwordLogin') {
                labels[i].style="visibility:hidden";
            }
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
    userNameInput.addEventListener('keyup',function(){
        if(nameRegex.test(userNameInput.value)){
            document.getElementById("userNameWarning").style.display="none";
            document.getElementById("userNameCheckMark").style.display="inline";
                    }
        else{
            document.getElementById("userNameCheckMark").style.display="none";
            document.getElementById("userNameWarning").style.display="block";
        }
    })
    emailInput.addEventListener('keyup',function(){
        if(emailRegex.test(emailInput.value)){
            document.getElementById("emailWarning").style.display="none";
            document.getElementById("emailCheckMark").style.display="inline";
                 }
        else{
            document.getElementById("emailCheckMark").style.display="none";
            document.getElementById("emailWarning").style.display="block";
        }
    })
    phoneInput.addEventListener('keyup',function(){
        if(mobileRegex.test(phoneInput.value)){
            document.getElementById("phoneWarning").style.display="none";
            document.getElementById("phoneCheckMark").style.display="inline";
                 }
        else{
            document.getElementById("phoneCheckMark").style.display="none";
            document.getElementById("phoneWarning").style.display="block";
        }
    })
    passwordInput.addEventListener('keyup',function(){
        if(passwordRegex.test(passwordInput.value)){
            document.getElementById("passwordWarning").style.display="none";
            document.getElementById("passwordCheckMark").style.display="inline";
                    }
        else{
            document.getElementById("passwordCheckMark").style.display="none"
            document.getElementById("passwordWarning").style.display="block";
        }
    })
    emailLoginInput.addEventListener('keyup',function(){
        if(emailRegex.test(emailLoginInput.value)){
            document.getElementById("emailLoginWarning").style.display="none";
            document.getElementById("emailLoginCheckMark").style.display="inline";

            
        }
        else{
            document.getElementById("emailLoginCheckMark").style.display="none";
            document.getElementById("emailLoginWarning").style.display="block";
        }
    })
    passwordLoginInput.addEventListener('keyup',function(){
        if((passwordLoginInput.value)){
            document.getElementById("passwordLoginCheckMark").style.display="inline";

            
        }
        else{
            document.getElementById("passwordLoginCheckMark").style.display="none";
        }
    })
    //slider 
    smallImageArray = document.getElementsByClassName("smallImage");
    for (let i = 0; i < smallImageArray.length; i++) {
        smallImageArray[i].firstElementChild.addEventListener('click',function (e) {
            document.getElementById("sliderImage").src=e.target.src;
        })
        
    }   var i =0;
        var j=0;
        var slider = setInterval(function(){
            if(i==smallImageArray.length){
                i=0;
            }
            document.getElementById("sliderImage").src=smallImageArray[i].firstElementChild.src;
            console.log("x");
            i++;
        },3000)
        i=0;
        document.getElementById("nextImage").addEventListener("click",function() {
            clearInterval(slider)
            if(i==6){
                i=0;
                j=0;
                    }
                document.getElementById("sliderImage").src=smallImageArray[i].firstElementChild.src;
                i++;

            j=i;
        })
        document.getElementById("previousImage").addEventListener("click",function() {
            clearInterval(slider)
            if(j==-1){
                j=5;
                    }
                document.getElementById("sliderImage").src=smallImageArray[j].firstElementChild.src;
                j--;

            i=j;
        })
        
    }
