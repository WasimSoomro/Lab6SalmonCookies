
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let seattle = {
  name: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgCookie: 6.3,
  numCust: 0,
  customersEachHourArray: [],
  randomNumCust: function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  },
  getNumCustEachHour: function () {
    this.numCust = this.randomNumCust(23, 65);

    for (let i = 0; i < 14; i++) {
      let randomCust = this.randomNumCust(this.minCust, this.maxCust);
      console.log(randomCust);
      this.customersEachHourArray.push(randomCust);
    }
    console.log(this.customersEachHourArray);
  },

  getTotalCookies: function() {
    this.getNumCustEachHour(); //Need help understanding this line
    for (let i = 0; i < this.customersEachHourArray.length; i++) {
  this.customersEachHourArray[i] *= this.avgCookie;
    }
return this.customersEachHourArray;
 },

render: function() {
console.log(seattle.randomNumCust(seattle.minCust, seattle.maxCust));
console.log(seattle.getTotalCookies());
}
}

let tokyo = {
  name: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  avgCookie: 1.2,
  numCust: 0,
  customersEachHourArray: [],
  randomNumCust: function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  },
  getNumCustEachHour: function () {
    this.numCust = this.randomNumCust(23, 65);

    for (let i = 0; i < 14; i++) {
      let randomCust = this.randomNumCust(this.minCust, this.maxCust);
      console.log(randomCust);
      this.customersEachHourArray.push(randomCust);
    }
    console.log(this.customersEachHourArray);
  },

  getTotalCookies: function() {
    for (let i = 0; i < this.customersEachHourArray.length; i++) {
  this.customersEachHourArray[i] *= this.avgCookie;
    }
return this.customersEachHourArray;
 },

render: function() {
console.log(tokyo.randomNumCust(tokyo.minCust, tokyo.maxCust));
console.log(tokyo.getTotalCookies());
}
}


// let seattle = {
//   name: 'Seattle',
//   minCust: 23,
//   maxCust: 65,
//   avgCookie: 6.3,
//   numCust: 0,
//   customersEachHourArray: [],
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
//     for (let i = 0; i < this.customersEachHourArray.length; i++) {
//   this.customersEachHourArray[i] *= this.avgCookie;
//     }
// return this.customersEachHourArray;
//  },

// render: function() {
// console.log(seattle.randomNumCust(seattle.minCust, seattle.maxCust));
// console.log(seattle.getTotalCookies());
// }
// }

// let seattle = {
//   name: 'Seattle',
//   minCust: 23,
//   maxCust: 65,
//   avgCookie: 6.3,
//   numCust: 0,
//   customersEachHourArray: [],
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
//     for (let i = 0; i < this.customersEachHourArray.length; i++) {
//   this.customersEachHourArray[i] *= this.avgCookie;
//     }
// return this.customersEachHourArray;
//  },

// render: function() {
// console.log(seattle.randomNumCust(seattle.minCust, seattle.maxCust));
// console.log(seattle.getTotalCookies());
// }
// }

// let seattle = {
//   name: 'Seattle',
//   minCust: 23,
//   maxCust: 65,
//   avgCookie: 6.3,
//   numCust: 0,
//   customersEachHourArray: [],
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
//     for (let i = 0; i < this.customersEachHourArray.length; i++) {
//   this.customersEachHourArray[i] *= this.avgCookie;
//     }
// return this.customersEachHourArray;
//  },

// render: function() {
// console.log(seattle.randomNumCust(seattle.minCust, seattle.maxCust));
// console.log(seattle.getTotalCookies());
// }
// }

// }

// let dubai = {
//   name: 'Dubai',
//   MinCust: 11,
//   MaxCust: 38,
//   AvgCookie: 3.7,
//   NumCust: 0,

// }

// let paris = {
//   name: 'Paris',
//   MinCust: 20,
//   MaxCust: 38,
//   AvgCookie: 2.3,
//   NumCust: 0,

// }

// let lima = {
//   name: 'Lima',
//   MinCust: 2,
//   MaxCust: 16,
//   AvgCookie: 4.6,
//   NumCust: 0,
 
// }



// tokyo.render();
// console.log(tokyo.randomNumCust);

// dubai.render();
// console.log(dubai.randomNumCust);

// paris.render();
// console.log(paris.randomNumCust);

// lima.render();
// console.log(lima.randomNumCust);
