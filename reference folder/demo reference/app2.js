
'use strict';

// global variables
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var allStores = [];
var footerTotalsArray = [];
var grandTotal = 0;
var cookieTable = document.getElementById('cookie-table');
var tbody = document.createElement('tbody');
var tfoot = document.createElement('tfoot');
var cookieForm = document.getElementById('cookieform');

// table?
// tfoot?

// object literal with methods
// var seattle = {
//   name: 'Seattle', 
//   minCust: 23,
//   maxCust: 65,
//   avgSales: 6.3,
//   hourlySalesArray: [],
//   dailyStoreTotal: 0,
//   getRandomCust: function(){
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
//   },
  
//   calcHourlySales: function (){
    
//     for (var i = 0; i < hours.length; i++){
//       var hourlyCookiesSold = Math.ceil(this.getRandomCust() * this.avgSales);
//       this.hourlySalesArray.push(hourlyCookiesSold);
//       this.dailyStoreTotal += hourlyCookiesSold;
//     }
//     console.log(hourlyCookiesSold);
//     console.log('inside calc hourly sales');
//   },
  
//   render: function(){
//     this.calcHourlySales();
    
//     for (var i = 0; i < hours.length; i++){
//       // var li = document.createElement('li');
//       // li.textContent = `${hours[i]}: ${this.hourlySalesArray[i]} cookies`; //6am: 16 cookies
//       // seattleList.appendChild(li);

//       renderElement('li', `${hours[i]}: ${this.hourlySalesArray[i]} cookies`, seattleList);
//     }

//     console.log('inside render method');
//     renderElement('li', `Total: ${this.dailyStoreTotal} cookies`, seattleList); 
//   }
  
// };



// turning my object literal into a constructor
function Store(name, min, max, avg) {
  this.name = name; 
  this.minCust = min;
  this.maxCust = max;
  this.avgSales = avg;
  this.hourlySalesArray = [];
  this.dailyStoreTotal = 0;
  allStores.push(this);
}  

// Store Prototype methods
Store.prototype.getRandomCust = function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  };
  
  Store.prototype.calcHourlySales = function () {
    
    for (var i = 0; i < hours.length; i++){
      var hourlyCookiesSold = Math.ceil(this.getRandomCust() * this.avgSales);
      this.hourlySalesArray.push(hourlyCookiesSold);
      this.dailyStoreTotal += hourlyCookiesSold;
    }
    console.log(hourlyCookiesSold);
    console.log('inside calc hourly sales');
  };
  
  Store.prototype.render = function(){
    this.calcHourlySales();

    
    cookieTable.appendChild(tbody);
    
    var tr = document.createElement('tr');
    tbody.appendChild(tr);
    
    renderElement('td', this.name, tr);

    for (var i = 0; i < hours.length; i++){
      // var li = document.createElement('li');
      // li.textContent = `${hours[i]}: ${this.hourlySalesArray[i]} cookies`; //6am: 16 cookies
      // seattleList.appendChild(li);

      renderElement('td', this.hourlySalesArray[i], tr);
    }

    console.log('inside render method');
    renderElement('td', this.dailyStoreTotal, tr); 
  };
  


// functions ??

function renderElement (childElement, content, parentElement){
  var chEl = document.createElement(childElement);
  chEl.textContent = content; //6am: 16 cookies
  parentElement.appendChild(chEl);
}

function renderHeader () {
  var thead = document.createElement('thead');
  cookieTable.appendChild(thead);
  var tr = document.createElement('tr');
  thead.appendChild(tr);

  renderElement('th', '', tr);
  for (var i of hours){
    renderElement('th', i, tr);
  }
  renderElement('th', 'Totals', tr);
}

// copied from renderHeader
function renderFooter () {
  footerTotalsArray = [];
  grandTotal = 0;

  calcFooterTotals();
  
  cookieTable.appendChild(tfoot);
  var tr = document.createElement('tr');
  tfoot.appendChild(tr);

  renderElement('td', 'Totals', tr);
  for (var i of footerTotalsArray){
    renderElement('td', i, tr);
  }
  renderElement('td', grandTotal, tr);
}

function calcFooterTotals() {
  for (var i = 0; i < hours.length; i++){
    var eachHourTotal = 0;
    for (var j = 0; j < allStores.length; j++){
      eachHourTotal += allStores[j].hourlySalesArray[i];
    }
  
  footerTotalsArray.push(eachHourTotal);
  grandTotal += eachHourTotal;
  }  
}

function handleSubmit(event){
  event.preventDefault();

  var storeName = event.target.storename.value;
  var min = parseInt(event.target.min.value);
  var max = parseInt(event.target.avg.value);
  var avg = parseInt(event.target.avg.value);

  var newStore = new Store (storeName, min, max, avg);
  newStore.render();
  tfoot.innerHTML = '';
  renderFooter();
}

// executable code

var seattle = new Store('Seattle', 23, 65, 6.3);
var tokyo = new Store( 'Tokyo', 3, 24, 1.2);
var dubai = new Store('Dubai', 11, 38, 3.7);
var paris = new Store('Paris', 20, 38, 2.3);
var lima = new Store ('Lima', 2, 16, 4.6);

seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();

renderHeader();
renderFooter();


cookieForm.addEventListener('submit', handleSubmit);