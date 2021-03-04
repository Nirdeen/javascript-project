var mail = document.getElementById("email");
var password2 = document.getElementById("password2");
var table = document.getElementById("content");
var warning = document.getElementById("warning");
var valid =1 ;
var check = function()
{if (JSON.parse(localStorage.getItem("userData")))
    {
        
        var userArray = JSON.parse(localStorage.getItem("userData"));
        for (var i=0 ; i<userArray.length ; i++)
        {
            if(userArray[i].email==mail.value & userArray[i].password==password2.value)
            {window.location.href = "../html/index.html";
            valid =0 ;}
            
            
        }
        if(valid==1)
        {warning.style.display="inline";}
        valid =1 ;
    }
else {
    warning.style.display="inline";

}}
var btn = document.getElementById("loginBtn");
btn.addEventListener("click",check);