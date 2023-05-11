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

let storeInfo = [];

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

  storeInfo.push(this);
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

//Below code for table taken from Jennifer Sung during code review
function renderHeader() {
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

function renderFooter() {
  let footRow = document.createElement("tr");
  footRow.id = "lastRow";
  salesTable.appendChild(footRow);

  let totals = document.createElement("td");
  totals.textContent = "Totals";
  footRow.appendChild(totals);

  let grandTotal = 0;

  for (let i = 0; i < hours.length; i++) {
    // slow loop
    let totals = 0;
    for (let j = 0; j < storeInfo.length; j++) {
      // fast loop
      totals += storeInfo[j].cookiesEachHour[i];
      grandTotal += storeInfo[j].cookiesEachHour[i];
    }
    let hourlyTotals = document.createElement("td");
    hourlyTotals.textContent = `${totals}`;
    footRow.appendChild(hourlyTotals);
  }
  let grandTotalCell = document.createElement("td");
  grandTotalCell.textContent = `${grandTotal}`;
  footRow.appendChild(grandTotalCell);
}

let seattle = new Store("Seattle", 23, 65, 6.3);
let tokyo = new Store("Tokyo", 3, 24, 1.2);
let dubai = new Store("Dubai", 11, 38, 3.7);
let paris = new Store("Paris", 20, 38, 2.3);
let lima = new Store("Lima", 2, 16, 4.6);

renderHeader();
seattle.renderList();
tokyo.renderList();
dubai.renderList();
paris.renderList();
lima.renderList();

renderFooter();

// function renderStore() {
//   for (let i = 0; i < storeInfo.length; i++) {
//     let currentStore = storeInfo[i];
//     currentStore.getTotalCookies();
//     currentStore.getNumCustEachHour();
//     currentStore.render();
//   }
// }
// renderStore();
