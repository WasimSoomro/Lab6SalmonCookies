"use strict";
let hours = [
  "6am",
  "7am",
  "8am",
  "9am",
  "10am",
  "11am",
  "12pm",
  "1pm",
  "2pm",
  "3pm",
  "4pm",
  "5pm",
  "6pm",
  "7pm",
];

let salesTable = document.getElementById("salesTable");

// let seattleList = document.getElementById('seattleList');

// *** Constructor Function ***
function Store(name, minCust, maxCust, avgCookie) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;
  this.numCust = 0;
  this.customersEachHourArray = [];
  this.totalDailyCookies = 0;
  this.cookiesEachHour = [];
}

Store.prototype.randomNumCust = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

Store.prototype.getNumCustEachHour = function () {
  for (let i = 0; i < 14; i++) {
    let randomCust = this.randomNumCust(this.minCust, this.maxCust);
    console.log(randomCust);
    this.customersEachHourArray.push(randomCust);
  }
};

Store.prototype.getTotalCookies = function () {
  this.getNumCustEachHour();
  for (let i = 0; i < this.customersEachHourArray.length; i++) {
    const perHour = Math.ceil(this.customersEachHourArray[i] * this.avgCookie);
    this.cookiesEachHour.push(perHour);
    this.totalDailyCookies += perHour;
  }
};

//Table rendering data taken from Jennifer Sung during code review
Store.prototype.renderList = function () {
  this.getTotalCookies();
  let tableRow = document.createElement("tr");
  salesTable.appendChild(tableRow);
  let cityName = document.createElement("td");
  cityName.textContent = this.name;
  tableRow.appendChild(cityName);
  for (let i = 0; i < hours.length; i++) {
    let totalCookieEachHour = document.createElement("td");
    totalCookieEachHour.textContent = this.cookiesEachHour[i];
    tableRow.appendChild(totalCookieEachHour);
  }
let tableTotalCookies = document.createElement("td");
tableTotalCookies.textContent = this.totalDailyCookies;
tableRow.appendChild(tableTotalCookies);

};
let seattle = new Store("Seattle", 23, 65, 6.3);

//Below code for table taken from Jennifer Sung during code review
function headerFunction() {
  let headRow = document.createElement("tr");
  salesTable.appendChild(headRow);

  let cell = document.createElement("th");
  headRow.appendChild(cell);

  for (let i = 0; i < hours.length; i++) {
    let headCell = document.createElement("th");
    headCell.textContent = hours[i];
    headRow.appendChild(headCell);
  }

  let totalHeaderCell = document.createElement("th");
  totalHeaderCell.textContent = "Daily Location Total";
  headRow.appendChild(totalHeaderCell);
}

headerFunction();

console.log(seattle);
seattle.renderList();

let tokyo = new Store('Tokyo', 3, 24, 1.2);
tokyo.renderList();
let dubai = new Store('Dubai', 11, 38, 3.7);
dubai.renderList();
let paris = new Store('Paris', 20, 38, 2.3);
paris.renderList();
let lima = new Store('Lima', 2, 16, 4.6);
lima.renderList();
// let seattleList = document.getElementById('seattleList');

// let seattle = {
//   name: 'Seattle',
//   minCust: 23,
//   maxCust: 65,
//   avgCookie: 6.3,
//   numCust: 0,
//   customersEachHourArray: [],
//   totalDailyCookies: 0,
//   cookiesEachHour: [],
//   randomNumCust: function (min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
//   },
//   getNumCustEachHour: function () {
//     this.numCust = this.randomNumCust(23, 65);

//     for (let i = 0; i < 14; i++) {
//       let randomCust = this.randomNumCust(this.minCust, this.maxCust);
//       console.log(randomCust);
//       this.customersEachHourArray.push(randomCust);
//     }
//     console.log(this.customersEachHourArray);
//   },

//   getTotalCookies: function() {
//     this.getNumCustEachHour(); //Need help understanding this line
//     for (let i = 0; i < this.customersEachHourArray.length; i++) {
//       const perHour = Math.ceil(this.customersEachHourArray[i]*this.avgCookie);
//       this.cookiesEachHour.push(perHour);
//       this.totalDailyCookies += perHour;
//     }
//     console.log(this.totalDailyCookies);
//     // return this.customersEachHourArray;
//  },

//  renderList: function(){
//   this.getTotalCookies();
//   for (let i =0; i < hours.length; i++) {
//     let listItem = document.createElement('li');
//     listItem.textContent = `${hours[i]}: ${this.cookiesEachHour[i]} cookies`
// seattleList.appendChild(listItem);
//   }
//   let listItem = document.createElement('li');
//   listItem.textContent = `Total: ${this.totalDailyCookies}`
//   seattleList.appendChild(listItem);
//  }

// }
// seattle.renderList();
