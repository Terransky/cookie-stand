'use strict';

var myForm = document.getElementById("storeform");

function handleSubmit(event) {
  event.preventDefault();

  // target.xxxx. has to be the id in the html
  var storeName = event.target.storename.value;
  console.log('store-name: ', storeName);

  var minCust = event.target.mincust.value;
  var maxCust = event.target.maxcust.value;
  var avgSales = event.target.avgsales.value;
  

  
}


myForm.addEventListener('submit', handleSubmit);



<label for="storename">Enter cookie stand location</label>
      <input type="text" name="storename">

      <label for="mincust">Enter minimum customers per day.</label>
      <input type="number" name="mincust">

      <label for="maxcust">Enter maximum customers per day.</label>
      <input type="number" name="maxcust">
      
      <label for="avgsales">Enter average sales per day.</label>
      <input type="number" name="avgsales"></input>