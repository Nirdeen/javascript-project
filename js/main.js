// creating product objects 
// var productsArr = [
//     {
//  name  : "",
//  cat : "clothes",
//  subCat : "",
//  brand : "",
//  img : "",
//  addtoCart (){

//  }
// }
// ]

var brands1 = document.getElementById("brands1");
var clearanceDiv1 = document.getElementById("clearance1")

// creating elements :-

var subCat1Data = document.createElement("ul");

// subCat1Data.setAttribute("")
var brand1 = document.createElement("li");
var brand2 = document.createElement("li");
var brand3 = document.createElement("li");
var brand4 = document.createElement("li");

// entering elements value

function pic1(){
    clearanceDiv1.style.display="block"


    brand1.innerHTML = '<a href="#productstarget" onclick="samsung()"> samsung </a>';
    brand2.innerHTML = '<a id="productstarget" href="#sub-cat1">nokia</a>';
    brand3.innerHTML = '<a href="#sub-cat1">shaomi</a>';
    brand4.innerHTML = '<a href="#sub-cat1">hwawi</a>';

    brands1.appendChild(subCat1Data);

    subCat1Data.appendChild(brand1);
    subCat1Data.appendChild(brand2);
    subCat1Data.appendChild(brand3);
    subCat1Data.appendChild(brand4);



}
 
// creating the brand products

var buttonDiv = document.createElement("div");
var leftButton = document.createElement("button");
var rightButton = document.createElement("button");
var slideshow = document.createElement("img");

// giving data for created elements

slideshow.setAttribute("src","../img/samsung.jpg")
leftButton.innerText="back"
rightButton.innerText="next"

function samsung(){

document.getElementById("products1").appendChild(slideshow)
document.getElementById("products1").appendChild(buttonDiv)
buttonDiv.appendChild(leftButton)
buttonDiv.appendChild(rightButton)
buttonDiv.style.width="140px";
buttonDiv.style.margin="auto";





}




