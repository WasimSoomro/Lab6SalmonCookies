
let hours = ['6am', '7am', '8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm', '7pm'];

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
  getNumCustEachHour: function(){
    this.NumCust = this.randomNumCust(23,65);
  
    for (let i = 0; i < 14; i++) {
     let randomCust = this.randomNumCust(this.minCust, this.maxCust);
    console.log(randomCust);
    this.customersEachHourArray.push(randomCust);
  }
  console.log(this.customersEachHourArray);

  },
  render: function(){
    this.getNumCust;
  }
}

seattle.render();
console.log(seattle.randomNumCust(seattle.MinCust, seattle.MaxCust));

let tokyo = {
  name: 'Tokyo',
  MinCust: 3,
  MaxCust: 24,
  AvgCookie: 1.2,
  NumCust: 0,
  randomNumCust: function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  },
  getNumCust: function(){
    this.NumCust = this.randomNumCust(3,24);
  },
  render: function(){
    this.NumCust;
  }
}

let dubai = {
  name: 'Dubai',
  MinCust: 11,
  MaxCust: 38,
  AvgCookie: 3.7,
  NumCust: 0,
  randomNumCust: function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  },
  getNumCust: function(){
    this.NumCust = this.randomNumCust(11,38);
  },
  render: function(){
    this.NumCust;
  }
}

let paris = {
  name: 'Paris',
  MinCust: 20,
  MaxCust: 38,
  AvgCookie: 2.3,
  NumCust: 0,
  randomNumCust: function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  },
  getNumCust: function(){
    this.NumCust = this.randomNumCust(20,38);
  },
  render: function(){
    this.NumCust;
  }
}

let lima = {
  name: 'Lima',
  MinCust: 2,
  MaxCust: 16,
  AvgCookie: 4.6,
  NumCust: 0,
  randomNumCust: function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  },
  getNumCust: function(){
    this.NumCust = this.randomNumCust(2,16);
  },
  render: function(){
    this.NumCust;
  }
}

seattle.render();
console.log(seattle.randomNumCust);

// tokyo.render();
// console.log(tokyo.randomNumCust);

// dubai.render();
// console.log(dubai.randomNumCust);

// paris.render();
// console.log(paris.randomNumCust);

// lima.render();
// console.log(lima.randomNumCust);
