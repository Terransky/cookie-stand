
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
}

var seattleConstruct = new Store("Seattle", 23, 65, 6.3);

seattleConstruct.render();

var seattle = {

  city: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgSales: 6.3,
  customers: 0,
  cookiesSoldPerHourArray: [],
  dailySalesCounter: 0,
  // generation random number of customers, multiply by avgSales, and push each hour's data into cookiesPerHour array.
  // get daily total by storing sum of cookiesPerHour
  randomCustomers: function(){
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },

  calcCookiesSoldPerHour: function(){
    for (var i = 0; i < hours.length; i++){
      var cookiesPerHour = Math.ceil(this.randomCustomers() * this.avgSales);
      this.cookiesSoldPerHourArray.push(cookiesPerHour);
      this.dailySalesCounter += cookiesPerHour; // same as this.dailySalesCounter = this.dailySalesCounter + cookiesPerHour;

    }
    console.log("calculate cookies per hour: ", cookiesPerHour);
  },

  render: function(){
    this.calcCookiesSoldPerHour();
    console.log("render the list");
    for (var i = 0; i < hours.length; i++){
      // create element
      var li = document.createElement("li");
      // give it content: 6am: 16 cookies
      li.textContent = `${hours[i]}: ${this.cookiesSoldPerHourArray[i]} cookies`;
      //append to the DOM / parentElement
      seattleUl.appendChild(li);
    }

    // create an element
    li = document.createElement("li");
    // give it content
    li.textContent = `Total: ${this.dailySalesCounter} cookies`;
    // append to dom / parent element
    seattleUl.appendChild(li);
    
  }
}

var tokyo = {

  city: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  avgSales: 1.2,
  customers: 0,
  cookiesSoldPerHourArray: [],
  dailySalesCounter: 0,
  // generation random number of customers, multiply by avgSales, and push each hour's data into cookiesPerHour array.
  // get daily total by storing sum of cookiesPerHour
  randomCustomers: function(){
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },

  calcCookiesSoldPerHour: function(){
    for (var i = 0; i < hours.length; i++){
      var cookiesPerHour = Math.ceil(this.randomCustomers() * this.avgSales);
      this.cookiesSoldPerHourArray.push(cookiesPerHour);
      this.dailySalesCounter += cookiesPerHour; // same as this.dailySalesCounter = this.dailySalesCounter + cookiesPerHour;

    }
    console.log("calculate cookies per hour: ", cookiesPerHour);
  },

  render: function(){
    this.calcCookiesSoldPerHour();
    console.log("render the list");
    for (var i = 0; i < hours.length; i++){
      // create element
      var li = document.createElement("li");
      // give it content: 6am: 16 cookies
      li.textContent = `${hours[i]}: ${this.cookiesSoldPerHourArray[i]} cookies`;
      //append to the DOM / parentElement
      tokyoUl.appendChild(li);
    }

    // create an element
    li = document.createElement("li");
    // give it content
    li.textContent = `Total: ${this.dailySalesCounter} cookies`;
    // append to dom / parent element
    tokyoUl.appendChild(li);
    
  }
}

var dubai = {

  city: 'dubai',
  minCust: 11,
  maxCust: 38,
  avgSales: 3.7,
  customers: 0,
  cookiesSoldPerHourArray: [],
  dailySalesCounter: 0,
  // generation random number of customers, multiply by avgSales, and push each hour's data into cookiesPerHour array.
  // get daily total by storing sum of cookiesPerHour
  randomCustomers: function(){
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },

  calcCookiesSoldPerHour: function(){
    for (var i = 0; i < hours.length; i++){
      var cookiesPerHour = Math.ceil(this.randomCustomers() * this.avgSales);
      this.cookiesSoldPerHourArray.push(cookiesPerHour);
      this.dailySalesCounter += cookiesPerHour; // same as this.dailySalesCounter = this.dailySalesCounter + cookiesPerHour;

    }
    console.log("calculate cookies per hour: ", cookiesPerHour);
  },

  render: function(){
    this.calcCookiesSoldPerHour();
    console.log("render the list");
    for (var i = 0; i < hours.length; i++){
      // create element
      var li = document.createElement("li");
      // give it content: 6am: 16 cookies
      li.textContent = `${hours[i]}: ${this.cookiesSoldPerHourArray[i]} cookies`;
      //append to the DOM / parentElement
      dubaiUl.appendChild(li);
    }

    // create an element
    li = document.createElement("li");
    // give it content
    li.textContent = `Total: ${this.dailySalesCounter} cookies`;
    // append to dom / parent element
    dubaiUl.appendChild(li);
    
  }
}

var paris = {

  city: 'Paris',
  minCust: 20,
  maxCust: 38,
  avgSales: 2.3,
  customers: 0,
  cookiesSoldPerHourArray: [],
  dailySalesCounter: 0,
  // generation random number of customers, multiply by avgSales, and push each hour's data into cookiesPerHour array.
  // get daily total by storing sum of cookiesPerHour
  randomCustomers: function(){
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },

  calcCookiesSoldPerHour: function(){
    for (var i = 0; i < hours.length; i++){
      var cookiesPerHour = Math.ceil(this.randomCustomers() * this.avgSales);
      this.cookiesSoldPerHourArray.push(cookiesPerHour);
      this.dailySalesCounter += cookiesPerHour; // same as this.dailySalesCounter = this.dailySalesCounter + cookiesPerHour;

    }
    console.log("calculate cookies per hour: ", cookiesPerHour);
  },

  render: function(){
    this.calcCookiesSoldPerHour();
    console.log("render the list");
    for (var i = 0; i < hours.length; i++){
      // create element
      var li = document.createElement("li");
      // give it content: 6am: 16 cookies
      li.textContent = `${hours[i]}: ${this.cookiesSoldPerHourArray[i]} cookies`;
      //append to the DOM / parentElement
      parisUl.appendChild(li);
    }

    // create an element
    li = document.createElement("li");
    // give it content
    li.textContent = `Total: ${this.dailySalesCounter} cookies`;
    // append to dom / parent element
    parisUl.appendChild(li);
    
  }
}

var lima = {

  city: 'lima',
  minCust: 2,
  maxCust: 16,
  avgSales: 4.6,
  customers: 0,
  cookiesSoldPerHourArray: [],
  dailySalesCounter: 0,
  // generation random number of customers, multiply by avgSales, and push each hour's data into cookiesPerHour array.
  // get daily total by storing sum of cookiesPerHour
  randomCustomers: function(){
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },

  calcCookiesSoldPerHour: function(){
    for (var i = 0; i < hours.length; i++){
      var cookiesPerHour = Math.ceil(this.randomCustomers() * this.avgSales);
      this.cookiesSoldPerHourArray.push(cookiesPerHour);
      this.dailySalesCounter += cookiesPerHour; // same as this.dailySalesCounter = this.dailySalesCounter + cookiesPerHour;

    }
    console.log("calculate cookies per hour: ", cookiesPerHour);
  },

  render: function(){
    this.calcCookiesSoldPerHour();
    console.log("render the list");
    for (var i = 0; i < hours.length; i++){
      // create element
      var li = document.createElement("li");
      // give it content: 6am: 16 cookies
      li.textContent = `${hours[i]}: ${this.cookiesSoldPerHourArray[i]} cookies`;
      //append to the DOM / parentElement
      limaUl.appendChild(li);
    }

    // create an element
    li = document.createElement("li");
    // give it content
    li.textContent = `Total: ${this.dailySalesCounter} cookies`;
    // append to dom / parent element
    limaUl.appendChild(li);
    
  }
}


tokyo.render();
dubai.render();
paris.render();
lima.render();






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

