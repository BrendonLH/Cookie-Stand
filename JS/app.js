'use strict';
// store HTML point of contact
var seattleElement = document.getElementById('seattle');
// create The element
var LiEl = document.createElement('li');
// give the element content
// LiEl.textContent = 'Seattle Shop';
// append to the DOM
seattleElement.appendChild(LiEl);

var hours = ['6am', '7am', '8am', '9am','10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

// Seattle Shop
var seattle = {
  minCustomerEachHour: 23,
  maxCustomerEachHour: 65,
  averageCookiesPerCustomer: 6.3,
  customersEachHour: [],
  cookieEachHour: [],
  totalCookiesForTheDay: 0,

  randomNumber: function (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  },
  avgCookies: function () {
    var averageCookies = this.randomNumber(23, 65);
    var Average = Math.round(averageCookies * 6.3);
    return Average;
  },
  render: function () {
    for (var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = `${hours[i]} Cookies:${this.avgCookies()}`;
      seattleElement.appendChild(liEl);
    }
  },

};
seattle.render();

// Tokyo Shop
var tokyoElement = document.getElementById('tokyo');
var LiEl = document.createElement('li');
// LiEl.textContent = 'Tokyo Shop';
tokyoElement.appendChild(LiEl);



var tokyo = {
  minCustomerEachHour: 3,
  maxCustomerEachHour: 24,
  averageCookiesPerCustomer: 1.2,
  customersEachHour: [],
  cookieEachHour: [],
  totalCookiesForTheDay: 0,

  randomNumber: function (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  },
  avgCookies: function () {
    var averageCookies = this.randomNumber(3, 24);
    var Average = Math.round(averageCookies * 1.2);
    return Average;
  },
  render: function () {
    for (var i = 0; i < hours.length; i++) {
      //create element
      var liEl = document.createElement('li');
      //give element content
      liEl.textContent = `${hours[i]} Cookies:${this.avgCookies()}`;
      //append to Dom
      tokyoElement.appendChild(liEl);
    }
  },

};
tokyo.render();

// dubai
var dubaiElement = document.getElementById('dubai');
var LiEl = document.createElement('li');
// LiEl.textContent = 'Dubai Shop';
dubaiElement.appendChild(LiEl);



var dubai = {
  minCustomerEachHour: 11,
  maxCustomerEachHour: 38,
  averageCookiesPerCustomer: 3.7,
  customersEachHour: [],
  cookieEachHour: [],
  totalCookiesForTheDay: 0,

  randomNumber: function (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  },
  avgCookies: function () {
    var averageCookies = this.randomNumber(11, 38);
    var Average = Math.round(averageCookies * 3.7);
    return Average;
  },
  render: function () {
    for (var i = 0; i < hours.length; i++) {
      //create element
      var liEl = document.createElement('li');
      //give element content
      liEl.textContent = `${hours[i]} Cookies:${this.avgCookies()}`;
      //append to Dom
      dubaiElement.appendChild(liEl);
    }
  },

};

dubai.render();


// dubai
var parisElement = document.getElementById('paris');
var LiEl = document.createElement('li');
// LiEl.textContent = 'Paris Shop';
parisElement.appendChild(LiEl);



var paris = {
  minCustomerEachHour: 20,
  maxCustomerEachHour: 38,
  averageCookiesPerCustomer: 2.3,
  customersEachHour: [],
  cookieEachHour: [],
  totalCookiesForTheDay: 0,

  randomNumber: function (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  },
  avgCookies: function () {
    var averageCookies = this.randomNumber(3, 24);
    var Average = Math.round(averageCookies * 1.2);
    return Average;
  },
  render: function () {
    for (var i = 0; i < hours.length; i++) {
      //create element
      var liEl = document.createElement('li');
      //give element content
      liEl.textContent = `${hours[i]} Cookies:${this.avgCookies()}`;
      //append to Dom
      parisElement.appendChild(liEl);
    }
  },

};

paris.render();

// dubai
var limaElement = document.getElementById('lima');
var LiEl = document.createElement('li');
// LiEl.textContent = 'Lima Shop';
limaElement.appendChild(LiEl);



var lima = {
  minCustomerEachHour: 2,
  maxCustomerEachHour: 16,
  averageCookiesPerCustomer: 4.6,
  customersEachHour: [],
  cookieEachHour: [],
  totalCookiesForTheDay: 0,

  randomNumber: function (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  },
  avgCookies: function () {
    var averageCookies = this.randomNumber(2, 16);
    var Average = Math.round(averageCookies * 4.6);
    return Average;
  },
  render: function () {
    for (var i = 0; i < hours.length; i++) {
      //create element
      var liEl = document.createElement('li');
      //give element content
      liEl.textContent = `${hours[i]} Cookies:${this.avgCookies()}`;
      //append to Dom
      limaElement.appendChild(liEl);
    }
  },

};

lima.render();

// <!-- Seattle	23	65	6.3
// Tokyo	3	24	1.2
// Dubai	11	38	3.7
// Paris	20	38	2.3
// Lima	2	16	4.6 -->