
'use strict';


const hours = ["6am", "7am", "8am", "9am", "10am", "11am", "12am", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];

const seattleUl = document.getElementById("Seattle");
const tokyoUl = document.getElementById("Tokyo");
const dubaiUl = document.getElementById("Dubai");
const parisUl = document.getElementById("Paris");
const limaUl = document.getElementById("Lima");

let seattle = {

  minHourlyCust: 23,
  maxHourlyCust: 65,
  avgCookiesPerCust: 6.3,
  cookiesPurchasedPerHourArr: [],
  totalPurchasedCookies: 0,

  randomCustomers: function() {
    return Math.floor(Math.random() * (this.maxHourlyCust - this.minHourlyCust + 1) + this.minHourlyCust);
  },

  cookiesSoldAndRender: function () {
    
    for (let i = 0; i <= hours.length; i++) {

    seattle.cookiesPurchasedPerHourArr.push(Math.round((seattle.randomCustomers() * seattle.avgCookiesPerCust)));
    seattle.totalPurchasedCookies += seattle.cookiesPurchasedPerHourArr[i];
    let li = document.createElement("li");
    li.textContent = `${hours[i]}: ${seattle.cookiesPurchasedPerHourArr[i]} cookies`;
    seattleUl.appendChild(li);
      
      if(i === hours.length) {
        li.textContent = `Total: ${seattle.totalPurchasedCookies} cookies`;
      }

    }
  },
}

let tokyo = {

  minHourlyCust: 3,
  maxHourlyCust: 24,
  avgCookiesPerCust: 1.2,
  cookiesPurchasedPerHourArr: [],
  totalPurchasedCookies: 0,

  randomCustomers: function() {
    return Math.floor(Math.random() * (this.maxHourlyCust - this.minHourlyCust + 1) + this.minHourlyCust);
  },

  cookiesSoldAndRender: function () {
    
    for (let i = 0; i <= hours.length; i++) {

    tokyo.cookiesPurchasedPerHourArr.push(Math.round((tokyo.randomCustomers() * tokyo.avgCookiesPerCust)));
    tokyo.totalPurchasedCookies += tokyo.cookiesPurchasedPerHourArr[i];
    let li = document.createElement("li");
    li.textContent = `${hours[i]}: ${tokyo.cookiesPurchasedPerHourArr[i]} cookies`;
    tokyoUl.appendChild(li);
      
      if(i === hours.length) {
        li.textContent = `Total: ${tokyo.totalPurchasedCookies} cookies`;
      }

    }
  },
}

let dubai = {

  minHourlyCust: 11,
  maxHourlyCust: 38,
  avgCookiesPerCust: 3.7,
  cookiesPurchasedPerHourArr: [],
  totalPurchasedCookies: 0,

  randomCustomers: function() {
    return Math.floor(Math.random() * (this.maxHourlyCust - this.minHourlyCust + 1) + this.minHourlyCust);
  },

  cookiesSoldAndRender: function () {
    
    for (let i = 0; i <= hours.length; i++) {

    dubai.cookiesPurchasedPerHourArr.push(Math.round((dubai.randomCustomers() * dubai.avgCookiesPerCust)));
    dubai.totalPurchasedCookies += dubai.cookiesPurchasedPerHourArr[i];
    let li = document.createElement("li");
    li.textContent = `${hours[i]}: ${dubai.cookiesPurchasedPerHourArr[i]} cookies`;
    dubaiUl.appendChild(li);
      
      if(i === hours.length) {
        li.textContent = `Total: ${dubai.totalPurchasedCookies} cookies`;
      }

    }
  },
}

let paris = {

  minHourlyCust: 20,
  maxHourlyCust: 38,
  avgCookiesPerCust: 2.3,
  cookiesPurchasedPerHourArr: [],
  totalPurchasedCookies: 0,

  randomCustomers: function() {
    return Math.floor(Math.random() * (this.maxHourlyCust - this.minHourlyCust + 1) + this.minHourlyCust);
  },

  cookiesSoldAndRender: function () {
    
    for (let i = 0; i <= hours.length; i++) {

    paris.cookiesPurchasedPerHourArr.push(Math.round((paris.randomCustomers() * paris.avgCookiesPerCust)));
    paris.totalPurchasedCookies += paris.cookiesPurchasedPerHourArr[i];
    let li = document.createElement("li");
    li.textContent = `${hours[i]}: ${paris.cookiesPurchasedPerHourArr[i]} cookies`;
    parisUl.appendChild(li);
      
      if(i === hours.length) {
        li.textContent = `Total: ${paris.totalPurchasedCookies} cookies`;
      }

    }
  },
}

let lima = {

  minHourlyCust: 23,
  maxHourlyCust: 65,
  avgCookiesPerCust: 6.3,
  cookiesPurchasedPerHourArr: [],
  totalPurchasedCookies: 0,

  randomCustomers: function() {
    return Math.floor(Math.random() * (this.maxHourlyCust - this.minHourlyCust + 1) + this.minHourlyCust);
  },

  cookiesSoldAndRender: function () {
    
    for (let i = 0; i <= hours.length; i++) {

    lima.cookiesPurchasedPerHourArr.push(Math.round((lima.randomCustomers() * lima.avgCookiesPerCust)));
    lima.totalPurchasedCookies += lima.cookiesPurchasedPerHourArr[i];
    let li = document.createElement("li");
    li.textContent = `${hours[i]}: ${lima.cookiesPurchasedPerHourArr[i]} cookies`;
    limaUl.appendChild(li);
      
      if(i === hours.length) {
        li.textContent = `Total: ${lima.totalPurchasedCookies} cookies`;
      }

    }
  },
}

seattle.cookiesSoldAndRender();
tokyo.cookiesSoldAndRender();
dubai.cookiesSoldAndRender();
paris.cookiesSoldAndRender();
lima.cookiesSoldAndRender();