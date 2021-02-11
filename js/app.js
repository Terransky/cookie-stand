
'use strict';


const hours = ["6:00am", "7:00am", "8:00am", "9:00am", "10:00am", "11:00am", "12:00am", "1:00pm", "2:00pm", "3:00pm", "4:00pm", "5:00pm", "6:00pm", "7:00pm"];

const cookieTable = document.getElementById("cookie-table");
let storesArr = [];

function Store (name, minHourlyCust, maxHourlyCust, avgCookiesPerCust) {

  this.name = name;
  this.minHourlyCust = minHourlyCust;
  this.maxHourlyCust = maxHourlyCust;
  this.avgCookiesPerCust = avgCookiesPerCust;
  this.cookiesPurchasedPerHourArr = [];
  this.totalPurchasedCookies = 0;
  storesArr.push(this);
}

Store.prototype.randomCustomers = function() {
  return Math.floor(Math.random() * (this.maxHourlyCust - this.minHourlyCust + 1) + this.minHourlyCust);
};

Store.prototype.calcCookiesSoldPerHour = function() {
  for (let i = 0; i < hours.length; i++) {
    this.cookiesPurchasedPerHourArr.push(Math.round((this.randomCustomers() * this.avgCookiesPerCust)));
    this.totalPurchasedCookies += this.cookiesPurchasedPerHourArr[i];
  }
};

Store.prototype.render = function() {
  let tr = document.createElement("tr");
  cookieTable.appendChild(tr);

  let td = document.createElement("td");
  td.textContent = this.name;
  tr.appendChild(td);

  for (let i = 0; i < hours.length; i++) {
    let td = document.createElement("td");
    td.textContent = this.cookiesPurchasedPerHourArr[i];
    tr.appendChild(td);
  }
  td = document.createElement("td");
  td.textContent = this.totalPurchasedCookies;
  tr.appendChild(td);
};


let columnTotal = [];

function calcColumnTotal() {
  
  for (let i = 0; i < hours.length; i++) {
    let columnTemp = 0;
    for (let j = 0; j < storesArr.length; j++) {
      columnTemp += storesArr[j].cookiesPurchasedPerHourArr[i];
      
    }
  columnTotal.push(columnTemp);
  }
  
};




let seattle = new Store ("Seattle", 23, 65, 6.3);
let tokyo = new Store ("Tokyo", 3, 24, 1.2);
let dubai = new Store ("Dubai", 11, 38, 3.7);
let paris = new Store ("Paris", 20, 38, 2.3);
let lima = new Store ("Lima", 23, 65, 6.3);
// storesArr.push(seattle, tokyo, dubai, paris, lima);



// table header hours row render

function makeHeader() {

  let thead = document.createElement("thead");
  cookieTable.appendChild(thead);

  let tr = document.createElement("tr");
  thead.appendChild(tr);

  let th = document.createElement("th");
  th.textContent = " ";
  tr.appendChild(th);

  for (let i = 0; i < hours.length; i++) {
    let th = document.createElement("th");
    th.textContent = hours[i];
    tr.appendChild(th);
  }

  th = document.createElement("th");
  th.textContent = "Daily Location Total";
  tr.appendChild(th);
};

makeHeader();

// body render



seattle.calcCookiesSoldPerHour();
seattle.render();
tokyo.calcCookiesSoldPerHour();
tokyo.render();
dubai.calcCookiesSoldPerHour();
dubai.render();
paris.calcCookiesSoldPerHour();
paris.render();
lima.calcCookiesSoldPerHour();
lima.render();






// table footer render

function makeFooter() {
  
  calcColumnTotal();
  let tfoot = document.createElement("tfoot");
  cookieTable.appendChild(tfoot);

  let tr = document.createElement("tr");
  tfoot.appendChild(tr);

  let td = document.createElement("td");
  td.textContent = "Totals";
  tr.appendChild(td);

  for (let i = 0; i < hours.length; i++) {
    td = document.createElement("td");
    td.textContent = columnTotal[i];
    tr.appendChild(td);
  }

  td = document.createElement("td");
  let temp = 0;
  for (let i = 0; i < storesArr.length; i++) {
    temp += storesArr[i].totalPurchasedCookies;
  }
  td.textContent = temp;
  tr.appendChild(td);
};

makeFooter();


function updatedTotalCalc() {
  let updatedTotal = document.createElement('tfoot');
 
}



// event handler
let myForm = document.getElementById("storeform");

function handleSubmit(event) {
  event.preventDefault();

  let storeName = event.target.storename.value;
  let minCust = +event.target.mincust.value;
  let maxCust = +event.target.maxcust.value;
  let avgSales = +event.target.avgsales.value;
  

  let newStore = new Store(storeName, minCust, maxCust, avgSales);

}