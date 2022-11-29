var img ;
var registerationForm= document.createElement("form");
var loginForm= document.createElement("form");
a = document.createElement("input");
r = document.createElement("input");
function index(){
    a.type="text";
    a.placeholder="enter your name";
    registerationForm.appendChild(a);
    console.log(registerationForm);
    //img = document.getElementById("img");
    //console.log(img);
    document.getElementById("registrationLink").addEventListener("click",function(){
        console.log(document.getElementsByClassName("formContainer")[0]);
        if(document.getElementsByClassName("formContainer")[0].firstElementChild==loginForm){
            document.getElementsByClassName("formContainer")[0].removeChild(loginForm)
        }
        else{
            document.getElementsByClassName("formContainer")[0].innerHTML="";
        }
        document.getElementsByClassName("formContainer")[0].appendChild(registerationForm);

        event.preventDefault();
    })
    document.getElementById("logInLink").addEventListener("click",function(){
        r.type="radio";
        r.value="hello";
        loginForm.appendChild(r);
        console.log(document.getElementsByClassName("formContainer")[0]);
        if(document.getElementsByClassName("formContainer")[0].firstElementChild==registerationForm){
            document.getElementsByClassName("formContainer")[0].removeChild(registerationForm)
        }
        else{
            document.getElementsByClassName("formContainer")[0].innerHTML="";
        }
        document.getElementsByClassName("formContainer")[0].innerHTML="";
        document.getElementsByClassName("formContainer")[0].appendChild(loginForm)
        event.preventDefault();
    })
}
