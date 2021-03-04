

var brands1 = document.getElementById("brands1");
var clearanceDiv1 = document.getElementById("clearance1")

// // creating elements :-

// var subCat1Data = document.createElement("ul");

// // subCat1Data.setAttribute("")
// var brand1 = document.createElement("li");
// var brand2 = document.createElement("li");
// var brand3 = document.createElement("li");
// var brand4 = document.createElement("li");

// // entering elements value

// function pic1(){
//     clearanceDiv1.style.display="block"


//     brand1.innerHTML = '<a href="#productstarget" onclick="samsung()"> samsung </a>';
//     brand2.innerHTML = '<a id="productstarget" href="#sub-cat1">nokia</a>';
//     brand3.innerHTML = '<a href="#sub-cat1">shaomi</a>';
//     brand4.innerHTML = '<a href="#sub-cat1">hwawi</a>';

//     brands1.appendChild(subCat1Data);

//     subCat1Data.appendChild(brand1);
//     subCat1Data.appendChild(brand2);
//     subCat1Data.appendChild(brand3);
//     subCat1Data.appendChild(brand4);



// }

// // creating the brand products

// var buttonDiv = document.createElement("div");
// var leftButton = document.createElement("button");
// var rightButton = document.createElement("button");
// var slideshow = document.createElement("img");

// // giving data for created elements

// slideshow.setAttribute("src","../img/samsung.jpg")
// leftButton.innerText="back"
// rightButton.innerText="next"

// function samsung(){

// document.getElementById("products1").appendChild(slideshow)
// document.getElementById("products1").appendChild(buttonDiv)
// buttonDiv.appendChild(leftButton)
// buttonDiv.appendChild(rightButton)
// buttonDiv.style.width="140px";
// buttonDiv.style.margin="auto";





// }

//Nav

function openNav() {

  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

 function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
   document.getElementById("main").style.marginLeft= "0";
 }

// form
document.getElementById("form")
var button=document.getElementById("btn");
var txtAddress=document.getElementById("adr");
var txtName=document.getElementById("fname");
var txtEmail=document.getElementById("email");
var txtCity =document.getElementById("city");
var txtState =document.getElementById("state");
var txtZip =document.getElementById("zip");
var txtNcard =document.getElementById("cname");
var txtCardn =document.getElementById("ccnum");
var txtEmonth =document.getElementById("expmonth");
var txtEyear =document.getElementById("expyear");
var txtCvv =document.getElementById("cvv");



function add()
{

  var arr = new Array () ;
  var addValue  =  txtAddress.value;
  var nameValue = txtName.value;
  var emailValue = txtEmail.value;
  var cityValue = txtCity.value;
  var stateValue = txtState.value;
  var zipValue  =  txtZip.value;
  var ncardValue = txtNcard.value;
  var cardnValue = txtCardn.value;
  var emonthValue = txtEmonth.value;
  var eyearValue = txtEyear.value;
  var cvvValue = txtCvv.value;


  if(addValue != "" &&   nameValue != "" && emailValue!= "" && cityValue!=""  && stateValue != "" && zipValue != "" &&   ncardValue != "" && cardnValue!= "" && emonthValue!=""  && eyearValue != "" && cvvValue !="")
  {
    getData ();
    arr.push

    ({   
      fname:txtName.value ,
      address:txtAddress.value ,
      city:txtCity.value,
      email:txtEmail.value,
      state:txtState.value,
      zip: txtZip.value,
      nameofcard:txtNcard.value,
      cardnumber: txtCardn.value,
      expmonth:txtEmonth.value,
      expyear: txtEyear.value,
      cvv:txtCvv.value,




    })
    localStorage.setItem("local Data",JSON.stringify(arr) );
  }  
else {
    if (addValue == ""){

      alert("enter your Address");
    }
    if(nameValue == ""){

      alert("enter your Name");
    }
    if(emailValue == ""){
      alert("enter your Email");
     }

    if(cityValue == ""){
      alert("enter your City ");

    }
    if(stateValue == ""){

     alert("enter your State");
    }
    if(zipValue == ""){

     alert("enter your Zip");
    }
    if(ncardValue == ""){
      alert("enter your Name Card");
    }
    if(cardnValue == ""){
      alert("enter your Card Number ");

    }
    if(emonthValue == ""){
      alert("enter the Exp Month");

    }
    if(eyearValue == ""){
      alert("enter your Exp Year");

    }
    if(cvvValue == ""){
      alert("enter your Cvv");

    }





  }
}



function getData () 
{
    var str = localStorage.getItem("localData");


    if(str!= null) 
    {
        arr = JSON.parse(str);



    }

}


button.addEventListener('click', add);
console.log(add());