
'use strict' 



var parentElement = document.getElementById("shop-profiles");
console.log(parentElement);

var cookieTable = document.getElementById("cookie-table");

var hours = ["6:00am", "7:00am", "8:00am", "9:00am", "10:00am", "11:00am", "12:00am", "1:00pm", "2:00pm", "3:00pm", "4:00pm", "5:00pm", "6:00pm", "7:00pm"];

// var seattleUl = document.getElementById("seattle");
// var tokyoUl = document.getElementById("tokyo");
// var dubaiUl = document.getElementById("dubai");
// var parisUl = document.getElementById("paris");
// var limaUl = document.getElementById("lima");


function Store (city, minCust, maxCust, avgSales){
  this.city = city;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgSales = avgSales;
  this.customers = 0;
  this.cookiesSoldPerHourArray= [];
  this.dailySalesCounter = 0;
}
  // generation random number of customers, multiply by avgSales, and push each hour's data into cookiesPerHour array.
  // get daily total by storing sum of cookiesPerHour
Store.prototype.randomCustomers = function(){
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
};

Store.prototype.calcCookiesSoldPerHour = function(){
  for (var i = 0; i < hours.length; i++){
    var cookiesPerHour = Math.ceil(this.randomCustomers() * this.avgSales);
    this.cookiesSoldPerHourArray.push(cookiesPerHour);
    this.dailySalesCounter += cookiesPerHour; // same as this.dailySalesCounter = this.dailySalesCounter + cookiesPerHour;

    }
    console.log("calculate cookies per hour: ", cookiesPerHour);
};
  
Store.prototype.render = function(){

  // get cookie sold per hour data for table
  this.calcCookiesSoldPerHour();

  //create row
  var tr = document.createElement("tr");
  // give row content
  //create td
  var td = document.createElement('td');
  // give td content
  td.textContent = this.city;
  //append to row
  tr.appendChild(td);
  // create tds for array
  for (var i = 0; i < this.cookiesSoldPerHourArray.length; i++) {
    td = document.createElement('td');
    td.textContent = this.cookiesSoldPerHourArray[i];
    tr.appendChild(td);
  }

  td = document.createElement('td');
  td.textContent = this.dailySalesCounter;
  tr.appendChild(td);

  cookieTable.appendChild(tr);

}
  

var seattle = new Store("Seattle", 23, 65, 6.3);
var tokyo = new Store("Tokyo", 3, 24, 1.2);
var dubai = new Store("Dubai", 11, 38, 3.7);
var paris = new Store("Paris", 20, 38, 2.3);
var lima = new Store("Lima", 2, 16, 4.6);

function headerCreator() {

  var rowHead = document.createElement('tr');
  var td = document.createElement('td');

  for (var i = 0; i < hours.length; i++){
    
    var th = document.createElement('th');
    th.textContent = hours[i];
    rowHead.appendChild(th);
  }

  cookieTable.appendChild(rowHead);
}

headerCreator();

seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();

function totalCalculator () {
var trTotal = document.createElement('tfoot');
var td = document.createElement('td');

  td.textContent = "Totals";
  trTotal.appendChild(td); 

  var hourlyTotalForAllStores = [] 
  for (var i = 0; i < seattle.cookiesSoldPerHourArray.length; i++) {
    
    td = document.createElement('td');
    
    hourlyTotalForAllStores.push(seattle.cookiesSoldPerHourArray[i] + tokyo.cookiesSoldPerHourArray[i] + dubai.cookiesSoldPerHourArray[i] + paris.cookiesSoldPerHourArray[i] + lima.cookiesSoldPerHourArray[i]);
    
    td.textContent = hourlyTotalForAllStores[i];
    
    trTotal.appendChild(td);
    
  }

  var trueTotal = seattle.dailySalesCounter + tokyo.dailySalesCounter + dubai.dailySalesCounter + paris.dailySalesCounter + lima.dailySalesCounter;

  td = document.createElement('td');
  td.textContent = trueTotal;
  trTotal.appendChild(td);

  cookieTable.appendChild(trTotal);

}

totalCalculator();


//function that adds up all store


//   // code from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
//   getCustomers: function(){
//     this.customers = randomCustomers(this.minCust, this.maxCust);
//     return Math.floor(Math.random() * (this.maxCust - this.MinCust + 1) + this.MinCust); 
//     //The maximum is exclusive and the minimum is inclusive

// image example

// var img = documennt.createElement('img');
// img.setAttribute('src', "foldername/imagename.jpg");
// img.setAttribute('alt', 'voice line for deaf people')
// article.appendChild(img);

