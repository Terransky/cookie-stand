
'use strict';


const hours = ["6am", "7am", "8am", "9am", "10am", "11am", "12am", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];

const seattleUl = document.getElementById("Seattle");
const tokyoUl = document.getElementById("Tokyo");
const dubaiUl = document.getElementById("Dubai");
const parisUl = document.getElementById("Paris");
const limaUl = document.getElementById("Lima");

let Seattle = {

  minHourlyCust: 23,
  maxHourlyCust: 65,
  avgCookiesPerCust: 6.3,
  cookiesPurchasedPerHourArr: [],
  totalPurchasedCookies: 0,

  randomCustomers: function() {
    return Math.floor(Math.random() * (this.maxHourlyCust - this.minHourlyCust + 1) + this.minHourlyCust);
  }
}

for (let i = 0; i <= hours.length; i++) {

  Seattle.cookiesPurchasedPerHourArr.push(Math.round((Seattle.randomCustomers() * Seattle.avgCookiesPerCust)));
  Seattle.totalPurchasedCookies += Seattle.cookiesPurchasedPerHourArr[i];
  let li = document.createElement("li");
  li.textContent = `${hours[i]}: ${Seattle.cookiesPurchasedPerHourArr[i]} cookies`;
  seattleUl.appendChild(li);
    
  if(i === hours.length) {
    li.textContent = `Total: ${Seattle.totalPurchasedCookies} cookies`;
  }
}



let Tokyo = {

  minHourlyCust: 3,
  maxHourlyCust: 24,
  avgCookiesPerCust: 1.2,
  cookiesPurchasedPerHourArr: [],
  totalPurchasedCookies: 0,

  randomCustomers: function() {
    return Math.floor(Math.random() * (this.maxHourlyCust - this.minHourlyCust + 1) + this.minHourlyCust);
  }
}

for (let i = 0; i <= hours.length; i++) {

  Tokyo.cookiesPurchasedPerHourArr.push(Math.round((Tokyo.randomCustomers() * Tokyo.avgCookiesPerCust)));
  Tokyo.totalPurchasedCookies += Tokyo.cookiesPurchasedPerHourArr[i];
  let li = document.createElement("li");
  li.textContent = `${hours[i]}: ${Tokyo.cookiesPurchasedPerHourArr[i]} cookies`;
  tokyoUl.appendChild(li);
    
  if(i === hours.length) {
    li.textContent = `Total: ${Tokyo.totalPurchasedCookies} cookies`;
  }
}




let Dubai = {

  minHourlyCust: 11,
  maxHourlyCust: 38,
  avgCookiesPerCust: 3.7,
  cookiesPurchasedPerHourArr: [],
  totalPurchasedCookies: 0,

  randomCustomers: function() {
    return Math.floor(Math.random() * (this.maxHourlyCust - this.minHourlyCust + 1) + this.minHourlyCust);
  }
}

for (let i = 0; i <= hours.length; i++) {

  Dubai.cookiesPurchasedPerHourArr.push(Math.round((Dubai.randomCustomers() * Dubai.avgCookiesPerCust)));
  Dubai.totalPurchasedCookies += Dubai.cookiesPurchasedPerHourArr[i];
  let li = document.createElement("li");
  li.textContent = `${hours[i]}: ${Dubai.cookiesPurchasedPerHourArr[i]} cookies`;
  dubaiUl.appendChild(li);
    
  if(i === hours.length) {
    li.textContent = `Total: ${Dubai.totalPurchasedCookies} cookies`;
  }
}




let Paris = {

  minHourlyCust: 20,
  maxHourlyCust: 38,
  avgCookiesPerCust: 2.3,
  cookiesPurchasedPerHourArr: [],
  totalPurchasedCookies: 0,

  randomCustomers: function() {
    return Math.floor(Math.random() * (this.maxHourlyCust - this.minHourlyCust + 1) + this.minHourlyCust);
  }
}

for (let i = 0; i <= hours.length; i++) {

  Paris.cookiesPurchasedPerHourArr.push(Math.round((Paris.randomCustomers() * Paris.avgCookiesPerCust)));
  Paris.totalPurchasedCookies += Paris.cookiesPurchasedPerHourArr[i];
  let li = document.createElement("li");
  li.textContent = `${hours[i]}: ${Paris.cookiesPurchasedPerHourArr[i]} cookies`;
  parisUl.appendChild(li);
    
  if(i === hours.length) {
    li.textContent = `Total: ${Paris.totalPurchasedCookies} cookies`;
  }
}




let Lima = {

  minHourlyCust: 23,
  maxHourlyCust: 65,
  avgCookiesPerCust: 6.3,
  cookiesPurchasedPerHourArr: [],
  totalPurchasedCookies: 0,

  randomCustomers: function() {
    return Math.floor(Math.random() * (this.maxHourlyCust - this.minHourlyCust + 1) + this.minHourlyCust);
  }
}

for (let i = 0; i <= hours.length; i++) {

  Lima.cookiesPurchasedPerHourArr.push(Math.round((Lima.randomCustomers() * Lima.avgCookiesPerCust)));
  Lima.totalPurchasedCookies += Lima.cookiesPurchasedPerHourArr[i];
  let li = document.createElement("li");
  li.textContent = `${hours[i]}: ${Lima.cookiesPurchasedPerHourArr[i]} cookies`;
  limaUl.appendChild(li);
    
  if(i === hours.length) {
    li.textContent = `Total: ${Lima.totalPurchasedCookies} cookies`;
  }
}