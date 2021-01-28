
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

  Seattle.cookiesPurchasedPerHourArr.push(Seattle.randomCustomers() * Seattle.avgCookiesPerCust);
  Seattle.totalPurchasedCookies += Seattle.cookiesPurchasedPerHourArr[i];
  let li = document.createElement("li");
  li.textContent = `${hours[i]}: ${Seattle.cookiesPurchasedPerHourArr[i]} cookies`;
  seattleUl.appendChild(li);
    
  if(i === hours.length) {
    li.textContent = `Total: ${Seattle.totalPurchasedCookies} cookies`;
  }
}



console.log(Seattle.cookiesPurchasedPerHourArr);
console.log(Seattle.totalPurchasedCookies);