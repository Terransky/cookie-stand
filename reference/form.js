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



// this tags a newly created element with an id
var trTotal = document.createElement('tfoot');
trTotal.id = "newRow";


// this allows to grab the element we created earlier from the html and assign to a new variable we can manipulate
var newRow = document.getElementById('newRow');



