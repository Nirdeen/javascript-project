function openNav() {

  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

 function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
   document.getElementById("main").style.marginLeft= "0";
 }


 





var delet = function(e){
  var favArr = JSON.parse(localStorage.getItem("favArr"))
  e.preventDefault()
  var row = e.target.parentNode.parentNode
  favArr.splice(row.rowIndex-2,1)
  localStorage.setItem('favArr', JSON.stringify(favArr))
  table.removeChild(row)
}


var addToCart = function (e){
  var favArr = JSON.parse(localStorage.getItem("favArr"))
  e.preventDefault()
  if (JSON.parse(localStorage.getItem("cartArr")))
    {var cartArr = JSON.parse(localStorage.getItem("cartArr"))}
  else
    {var cartArr =[]}
    var row = e.target.parentNode.parentNode.parentNode
      cartArr.push({
        category: favArr[row.rowIndex-2].category,
        subcategory: favArr[row.rowIndex-2].subcategory,
        brand: favArr[row.rowIndex-2].brand,
        price: favArr[row.rowIndex-2].price,
        picPath: favArr[row.rowIndex-2].picPath
      })
      localStorage.setItem('cartArr', JSON.stringify(cartArr))
      favArr.splice(row.rowIndex-2,1)
      localStorage.setItem('favArr', JSON.stringify(favArr))
      table.removeChild(row)
  
}




//--------------------------insert data in favourite page from the array-----------Ahmed Shebl--------------------------------------
/* <tr>
                    <!-- product image -->
                    <td>
                        <img src="../img/1.jpg" id="product-img">
                        <!-- product details -->
                        <br>
                        <label>Product name</label>
                        <br><br>
                        <a href="">Category</a>
                        <br><br>
                        <button id="btn">Remove</button>
                    </td>
                    <!-- price -->
                    <td>
                        L.E *** 
                    </td>
                    <!--offers-->
                    <td>L.E ***</td>
                    <!-- total depends on quantity -->
                    <td>
                        <img src="../img/buy.png" id="cart">
                        <br>
                        <button type="button"value="" id="bt">add to cart</button></td>
                </tr> */
// create data 
if (JSON.parse(localStorage.getItem("favArr")))
    {
        var favArr = JSON.parse(localStorage.getItem("favArr"))
        for(var i=0 ; i<favArr.length ; i++)
          { 
            // creating the table structure---------------------------------------------------------------------------------------
            var table = document.getElementById("fav-content")
            var row = document.createElement("tr")
            var cell1 = document.createElement("td")
            var cell2 = document.createElement("td")
            var cell3 = document.createElement("td")
            var cell4 = document.createElement("td")
            var cell5 = document.createElement("td")
            var cell6 = document.createElement("td")
            // fillin structure with data------------------------------------------------------------------------------------------
            cell1.innerHTML = `<img src=${favArr[i].picPath} id="product-img">`
            cell2.innerHTML = `<a href="#">${favArr[i].brand}</a>`
            cell3.innerHTML = `<label>${favArr[i].subcategory}</label>`
            cell4.innerHTML = `${favArr[i].price}`
            cell5.innerHTML = `<button id="btn" >Remove</button>`
            cell6.innerHTML = `<a href="#"> <img src="../img/buy.png" id="cart"> <a>`
            cell5.addEventListener("click",delet)
            cell6.addEventListener("click",addToCart)
            // appending childs ---------------------------------------------------------------------------------------------------
            table.appendChild(row)
            row.appendChild(cell1)
            row.appendChild(cell2)
            row.appendChild(cell3)
            row.appendChild(cell4)
            row.appendChild(cell5)
            row.appendChild(cell6)
            

          }


    }
