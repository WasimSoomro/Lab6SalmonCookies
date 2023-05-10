'use strict';
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
// let table = document.getElementById('salesTable');

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

Store.prototype.randomNumCust = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

Store.prototype.getNumCustEachHour = function () {
  for (let i = 0; i < 14; i++) {
      let randomCust = this.randomNumCust(this.minCust, this.maxCust);
           console.log(randomCust);
           this.customersEachHourArray.push(randomCust);
         }
}

Store.prototype.getTotalCookies = function() {
      this.getNumCustEachHour(); 
       for (let i = 0; i < this.customersEachHourArray.length; i++) {
         const perHour = Math.ceil(this.customersEachHourArray[i]*this.avgCookie);
         this.cookiesEachHour.push(perHour);
        this.totalDailyCookies += perHour;
}
}

Store.prototype.renderList = function() {
  this.getTotalCookies();
     for (let i =0; i < hours.length; i++) {
       let listItem = document.createElement('li');
       listItem.textContent = `${hours[i]}: ${this.cookiesEachHour[i]} cookies`
       seattleList.appendChild(listItem);
     }
      let listItem = document.createElement('li');
     listItem.textContent = `Total: ${this.totalDailyCookies}`
    seattleList.appendChild(listItem);
  }

const seattle = new Store('Seattle', 23, 65, 6.3);
console.log(seattle);
// seattle.randomNumCust();
// seattle.getNumCustEachHour();
// seattle.getTotalCookies();
seattle.renderList(); 

// const tokyo = new Store('Tokyo', 3, 24, 1.2);
// const dubai = new Store('Dubai', 11, 38, 3.7);
// const paris = new Store('Paris', 20, 38, 2.3);
// const lima = new Store('Lima', 2, 16, 4.6); 

// let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];


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
