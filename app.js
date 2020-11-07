
'use strict' 



var parentElement = document.getElementById("shop-profiles");
console.log(parentElement);

var hours = ["6am", "7am", "8am", "9am", "10am", "11am", "12am", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];
var seattleUl = document.getElementById("seattle");
var tokyoUl = document.getElementById("tokyo");
var dubaiUl = document.getElementById("dubai");
var parisUl = document.getElementById("paris");
var limaUl = document.getElementById("lima");

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

seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();



//   // code from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
//   getCustomers: function(){
//     this.customers = randomCustomers(this.minCust, this.maxCust);
//     return Math.floor(Math.random() * (this.maxCust - this.MinCust + 1) + this.MinCust); 
//     //The maximum is exclusive and the minimum is inclusive
//        // console.log(`${this.customers}`);
//   },

//   // render cookie list to DOM
//   render: function(){
//     //create element
//     var article = document.createElement("article");
//     parentElement.appendChild(article);

//     var h2 = document.createElement("h2");
//     h2.textContent = this.city;
//     article.appendChild(h2);

//     var p = document.createElement('p');
//     p.textContent = `${this.city} is a rainy city.`;
//     article.appendChild(p);

//     var ul = document.createElement('ul');
//     article.appendChild(ul);

//     for (var i = 0; i < this.arrayname.length; i++) {
//       var li = document.createElement('li');
//       li.textContent = this.arrayname[i];
//       ul.appendChild(li);
//     }

//   }
// };


// seattle.getCustomers();
// seattle.render();

var tokyo = {

  city: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  avgSales: 1.2,
};

var dubai = {

  city: 'Dubai',
  minCust: 11,
  maxCust: 38,
  avgSales: 3.7,
};

var paris = {

  city: 'Paris',
  minCust: 20,
  maxCust: 38,
  avgSales: 2.3,
};

var lima = {

  city: 'Lima',
  minCust: 2,
  maxCust: 16,
  avgSales: 4.6,
};


//create element
// var article = document.createElement("article");
// parentElement.appendChild(article);

// var h2 = document.createElement("h2");
// h2.textContent = seattle.city;
// article.appendChild(h2);

// var p = document.createElement('p');
// p.textContent = `${seattle.city} is a rainy city.`;
// article.appendChild(p);

// var ul = document.createElement('ul');
// article.appendChild(ul);

// for (var i = 0; i < seattle.arrayname.length; i++){
//   var li = document.createElement('li');
//   li.textContent = seattle.arrayname[i];
//   ul.appendChild(li);
// }

// image example

// var img = documennt.createElement('img');
// img.setAttribute('src', "foldername/imagename.jpg");
// img.setAttribute('alt', 'voice line for deaf people')
// article.appendChild(img);







// var frankie = {
//   name: 'Frankie',
//   age: 0,
//   interests: ['cuddling', 'chasing string', 'catnip'],
//   isGoodWithKids: true,
//   isGoodWithDogs: false,
//   isGoodWithCats: true,
//   getAge: function () {
//     this.age = `${randomAge(3, 12)} months old!`;
//     console.log(`${this.name} is ${this.age}`);
//   },
//   render: function () {
//     var article = document.createElement('article');
//     parentElement.appendChild(article);

//     var h2 = document.createElement('h2');
//     h2.textContent = this.name;
//     article.appendChild(h2);

//     var p = document.createElement('p');
//     p.textContent = `${this.name} is adorable and is ${this.age}`;
//     article.appendChild(p);

//     var ul = document.createElement('ul');
//     article.appendChild(ul);

//     // most relevant part for lab-06
//     for (var i = 0; i < this.interests.length; i++) {
//       var li = document.createElement('li');
//       li.textContent = this.interests[i];
//       ul.appendChild(li);
//     }