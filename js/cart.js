if (JSON.parse(localStorage.getItem("cartArr")))
    {
        var totalCost = function() {
                    var sum = 0;
                for (var i=0 ; i<cartArr.length ; i++)
                {sum += Number(table.rows[i+2].cells[5].innerText);
                var cost = document.getElementById("totalCost")
                         cost.innerHTML = sum;
                }
            
            }
        var delet = function(e){
            var cartArr = JSON.parse(localStorage.getItem("cartArr"))
            e.preventDefault()
            var row = e.target.parentNode.parentNode
            cartArr.splice(row.rowIndex-2,1)
            localStorage.setItem('cartArr', JSON.stringify(cartArr))
            table.removeChild(row)
          }
        var dec = function(e){
            e.preventDefault()
            var row = e.target.parentNode.parentNode
            if(Number(row.cells[2].innerText)>1)
            {   
                
                
                row.cells[2].innerHTML=Number(row.cells[2].innerText)-1
                row.cells[5].innerHTML = row.cells[2].innerHTML*row.cells[4].innerHTML
                totalCost()
            }
        }
            var inc = function(e){
                e.preventDefault()
                    var row = e.target.parentNode.parentNode
                   
                    row.cells[2].innerHTML=Number(row.cells[2].innerText)+1
                    row.cells[5].innerHTML = row.cells[2].innerHTML*row.cells[4].innerHTML
                    totalCost()
                }
        var cartArr = JSON.parse(localStorage.getItem("cartArr"))
        for(var i=0 ; i<cartArr.length ; i++)
          { 
            // creating the table structure---------------------------------------------------------------------------------------
            var table = document.getElementById("cart-content")
            var row = document.createElement("tr")
            var cell1 = document.createElement("td")
            var cell2 = document.createElement("td")
            var cell3 = document.createElement("td")
            var cell4 = document.createElement("td")
            var cell5 = document.createElement("td")
            var cell6 = document.createElement("td")
            var cell7 = document.createElement("td")
            
            // fillin structure with data------------------------------------------------------------------------------------------
            cell1.innerHTML = `<img src=${cartArr[i].picPath} id="product-img"><br><label>${cartArr[i].subcategory}</label><br><a href="#">${cartArr[i].brand}</a>`
            cell2.innerHTML = `<a href="">-<a>`
            cell3.innerHTML = 1
            cell4.innerHTML = `<a href="">+<a>`
            cell5.innerHTML = `${cartArr[i].price}`
            cell6.innerHTML = cell3.innerHTML*cell5.innerHTML
            cell7.innerHTML = `<button id="btn" >Remove</button>`
        
          
           cell2.addEventListener("click",dec)
           cell4.addEventListener("click",inc)
           cell7.addEventListener("click",delet)
           
            // appending childs ---------------------------------------------------------------------------------------------------
            table.appendChild(row)
            row.appendChild(cell1)
            row.appendChild(cell2)
            row.appendChild(cell3)
            row.appendChild(cell4)
            row.appendChild(cell5)
            row.appendChild(cell6)
            row.appendChild(cell7)
           
            

          }
          
            totalCost();
    }
