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
