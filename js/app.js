
'use strict' 



var parentElement = document.getElementById("shop-profiles");
console.log(parentElement);

var cookieTable = document.getElementById("cookie-table");

var hours = ["6am", "7am", "8am", "9am", "10am", "11am", "12am", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];

var seattleUl = document.getElementById("seattle");
var tokyoUl = document.getElementById("tokyo");
var dubaiUl = document.getElementById("dubai");
var parisUl = document.getElementById("paris");
var limaUl = document.getElementById("lima");


function Store (city, minCust, maxCust, avgSales){
  this.city = city;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgSales = avgSales;
  this.customers = 0;
  this.cookiesSoldPerHourArray= [];
  this.dailySalesCounter = 0;

  // generation random number of customers, multiply by avgSales, and push each hour's data into cookiesPerHour array.
  // get daily total by storing sum of cookiesPerHour
  this.randomCustomers = function(){
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  };

  this.calcCookiesSoldPerHour = function(){
    for (var i = 0; i < hours.length; i++){
      var cookiesPerHour = Math.ceil(this.randomCustomers() * this.avgSales);
      this.cookiesSoldPerHourArray.push(cookiesPerHour);
      this.dailySalesCounter += cookiesPerHour; // same as this.dailySalesCounter = this.dailySalesCounter + cookiesPerHour;

    }
    console.log("calculate cookies per hour: ", cookiesPerHour);
  };
  
  this.render = function(){

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
    for (var i = 0; i < this.cookiesSoldPerHourArray.length; i++){
      td = document.createElement('td');
      td.textContent = this.cookiesSoldPerHourArray[i];
      tr.appendChild(td);
    }
     
    td = document.createElement('td');
    td.textContent = this.minCust;
    tr.appendChild(td);

    cookieTable.appendChild(tr);
    
    
  }

  this.render();
}


var seattle = new Store("Seattle", 23, 65, 6.3);
var tokyo = new Store("Tokyo", 3, 24, 1.2);
var dubai = new Store("Dubai", 11, 38, 3.7);
var paris = new Store("Paris", 20, 38, 2.3);
var lima = new Store("Lima", 2, 16, 4.6);




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

