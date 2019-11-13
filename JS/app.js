'use strict';
// store HTML point of contact
// var seattleElement = document.getElementById('seattle');
// create The element
// var LiEl = document.createElement('li');
// give the element content
// LiEl.textContent = 'Seattle Shop';
// append to the DOM
// seattleElement.appendChild(LiEl);

var hours = ['6am', '7am', '8am', '9am','10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var storeSales = document.getElementById('stores');
// Seattle Shop
var seattle = {
  storeName: 'Seattle Headquarters',
  minCustomerEachHour: 23,
  maxCustomerEachHour: 65,
  averageCookiesPerCustomer: 6.3,
  customersEachHour: [],
  cookieEachHour: [],
  totalCookiesForTheDay: 0,

  calculateCustomers: function() {
    for(var i = 0; i < hours.length; i++) {
      var randomCustomer = getRandom(this.minCustomerEachHour, this.maxCustomerEachHour);
      this.customersEachHour.push(randomCustomer);
    }
  },


  calculateCookies: function() {
    for(var i = 0; i < this.customersEachHour.length; i ++) {
      var cookies = Math.round(this.customersEachHour[i] * this.averageCookiesPerCustomer);
      this.cookieEachHour.push(cookies);
      this.totalCookiesForTheDay += cookies;
      this.cookieEachHour.push(cookies);
    }
  },

  render: function() {
    this.calculateCustomers();
    this.calculateCookies();
    var ulEl = document.createElement('ul');
    var h2El = document.createElement('h2');
    h2El.textContent = this.storeName;
    storeSales.appendChild(h2El);
    for(var i = 0; i < hours.length; i ++) {
      var LiEl = document.createElement('li');
      LiEl.textContent = `${hours[i]} : ${this.cookieEachHour[i]} Cookies`;
      ulEl.appendChild(LiEl);
    }
    LiEl = document.createElement('li');
    LiEl.textContent = `Total : ${this.totalCookiesForTheDay}Cookies`;
    ulEl.appendChild(LiEl);
    storeSales.appendChild(ulEl);

  },
};
function getRandom(min,max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

seattle.render();