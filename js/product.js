function openNav() {

    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
   function closeNav() {
      document.getElementById("mySidebar").style.width = "0";
     document.getElementById("main").style.marginLeft= "0";
   }

   


   // product

   function imageZoom(imgID, resultID) {
    var img, lens, result, cx, cy;
    img = document.getElementById(imgID);
    result = document.getElementById(resultID);
    /*create lens:*/
    lens = document.createElement("DIV");
    lens.setAttribute("class", "img-zoom-lens");
    /*insert lens:*/
    img.parentElement.insertBefore(lens, img);
    /*calculate the ratio between result DIV and lens:*/
    cx = result.offsetWidth / lens.offsetWidth;
    cy = result.offsetHeight / lens.offsetHeight;
    /*set background properties for the result DIV:*/
    result.style.backgroundImage = "url('" + img.src + "')";
    result.style.backgroundSize = (img.width * cx) + "px " + (img.height * cy) + "px";
    /*execute a function when someone moves the cursor over the image, or the lens:*/
    lens.addEventListener("mousemove", moveLens);
    img.addEventListener("mousemove", moveLens);
    /*and also for touch screens:*/
    lens.addEventListener("touchmove", moveLens);
    img.addEventListener("touchmove", moveLens);
    function moveLens(e) {
      var pos, x, y;
      /*prevent any other actions that may occur when moving over the image:*/
      e.preventDefault();
      /*get the cursor's x and y positions:*/
      pos = getCursorPos(e);
      /*calculate the position of the lens:*/
      x = pos.x - (lens.offsetWidth / 2);
      y = pos.y - (lens.offsetHeight / 2);
      /*prevent the lens from being positioned outside the image:*/
      if (x > img.width - lens.offsetWidth) {x = img.width - lens.offsetWidth;}
      if (x < 0) {x = 0;}
      if (y > img.height - lens.offsetHeight) {y = img.height - lens.offsetHeight;}
      if (y < 0) {y = 0;}
      /*set the position of the lens:*/
      lens.style.left = x + "px";
      lens.style.top = y + "px";
      /*display what the lens "sees":*/
      result.style.backgroundPosition = "-" + (x * cx) + "px -" + (y * cy) + "px";
    }
    function getCursorPos(e) {
      var a, x = 0, y = 0;
      e = e || window.event;
      /*get the x and y positions of the image:*/
      a = img.getBoundingClientRect();
      /*calculate the cursor's x and y coordinates, relative to the image:*/
      x = e.pageX - a.left;
      y = e.pageY - a.top;
      /*consider any page scrolling:*/
      x = x - window.pageXOffset;
      y = y - window.pageYOffset;
      return {x : x, y : y};
    }
  }

  
// Initiate zoom effect:
imageZoom("myimage", "myresult");

// create cart array starttin from buy button-----------------------Ahmed Shebl------------------------------------------------

var buyBtn = document.getElementById("buy"); //buy laptop-------------------------------------------------
var favBtn = document.getElementById("favourit");


var addToCart = function () {
  if (JSON.parse(localStorage.getItem("cartArr")))
  {
    var cartArr = JSON.parse(localStorage.getItem("cartArr"))
    cartArr.push({
      category: document.getElementById("category").innerText,
      subcategory: document.getElementById("subcat").innerText,
      brand: document.getElementById("brand").innerText,
      price: Number(document.getElementById("price").innerHTML),
      picPath: document.getElementById("myimage").getAttribute("src")
    })
  localStorage.setItem('cartArr', JSON.stringify(cartArr));}
  else{
    var cartArr = []
    cartArr.push({
      category: document.getElementById("category").innerText,
      subcategory: document.getElementById("subcat").innerText,
      brand: document.getElementById("brand").innerText,
      price: Number(document.getElementById("price").innerHTML),
      picPath: document.getElementById("myimage").getAttribute("src")
    })
    localStorage.setItem('cartArr', JSON.stringify(cartArr))
  }
}

buyBtn.addEventListener("click",addToCart);
                                                //add to favourites------------Ahmed Shebl ----------------------------------------
var addTofav = function () {
  if (JSON.parse(localStorage.getItem("favArr")))
  {
    var favArr = JSON.parse(localStorage.getItem("favArr"))
    favArr.push({
      category: document.getElementById("category").innerText,
      subcategory: document.getElementById("subcat").innerText,
      brand: document.getElementById("brand").innerText,
      price: Number(document.getElementById("price").innerHTML),
      picPath: document.getElementById("myimage").getAttribute("src")
    })
  localStorage.setItem('favArr', JSON.stringify(favArr));}
  else{
    var favArr = []
    favArr.push({
      category: document.getElementById("category").innerText,
      subcategory: document.getElementById("subcat").innerText,
      brand: document.getElementById("brand").innerText,
      price: Number(document.getElementById("price").innerHTML),
      picPath: document.getElementById("myimage").getAttribute("src")
    })
    localStorage.setItem('favArr', JSON.stringify(favArr))
  }
}

favBtn.addEventListener("click",addTofav);

