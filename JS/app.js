'use strict';
// store HTML point of contact
var firstAndPikeElement = document.getElementById('firstAndPike');
// create The element
var LiEl = document.createElement('li');
// give the element content
LiEl.textContent = 'Seattle Shop';
// append to the DOM
firstAndPikeElement.appendChild(LiEl);

var hours = ['6am', '7am', '8am', '9am','10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];


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
      //create element
      var liEl = document.createElement('li');
      //give element content
      liEl.textContent = `${hours[i]} Cookies:${this.avgCookies()}`;
      //append to Dom
      firstAndPikeElement.appendChild(liEl);
    }
  },

};
seattle.render();

var firstAndPikeElement = document.getElementById('firstAndPike');
var LiEl = document.createElement('li');
LiEl.textContent = 'Tokyo Shop';
firstAndPikeElement.appendChild(LiEl);

var hours = ['6am', '7am', '8am', '9am','10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var tokyo = {
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
      firstAndPikeElement.appendChild(liEl);
    }
  },

};

tokyo.render();

var firstAndPikeElement = document.getElementById('firstAndPike');
var LiEl = document.createElement('li');
LiEl.textContent = 'Tokyo Shop';
firstAndPikeElement.appendChild(LiEl);

var hours = ['6am', '7am', '8am', '9am','10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var tokyo = {
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
      firstAndPikeElement.appendChild(liEl);
    }
  },

};

tokyo.render();
