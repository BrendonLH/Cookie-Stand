'use strict';
// arrray to show store hours
CookieShop.hours = ['6am', '7am', '8am', '9am','10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
// array to store all new cookie shops
CookieShop.allStores = [];
// use document.getelement to store all table id's
CookieShop.tableDataEl = document.getElementById('tableData');
// a counter to tally all stores total
CookieShop.allStoresTotal = 0;

// need a constructor to create new instances of cookie shops
function CookieShop(storeName, minCust, maxCust, avgCookie) {
  this.storeName = storeName;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;
  this.customersEachHour = [];
  this.cookieEachHour = [];
  this.totalCookiesForTheDay = 0;
  CookieShop.allStores.push(this);
  // generate cookies upon instantiation
  this.generateHourlyCookies();
  // generate shop row upon instantiation
  this.renderShopRow();
  console.log(this.cookieEachHour);
}



var randomCustomer = function(min, max) {
  return Math.ceil(Math.random() * ((max - min) + 1) + min);
};

CookieShop.prototype.generateHourlyCookies = function() {
  for(var i = 0; i < CookieShop.hours.length; i ++) {
    var cookie = Math.ceil(this.avgCookie * randomCustomer(this.minCust, this.maxCust));
    this.cookieEachHour.push(cookie);
    this.totalCookiesForTheDay += cookie; 
    CookieShop.allStoresTotal += cookie;
  }
}

CookieShop.prototype.generateHourlyCuctomer = function() {
  for(var i = 0; i < CookieShop.hours.length; i ++) {
    var customer = Math.ceil(randomCustomer(this.minCust, this.maxCust));
    this.customersEachHour.push(customer);
  } 
}

// function to render header row
var renderHeaderRow = function() {
  // create elements
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  // give elements content
  thEl.textContent = 'Shop';
  // append to the DOM 
  trEl.appendChild(thEl); 

  // interating over the shop hours
  for( var i = 0; i < CookieShop.hours.length; i ++) {
    var tdEl = document.createElement('td');
    tdEl.textContent = CookieShop.hours[i];
    trEl.appendChild(tdEl);
  }
  var tdElem = document.createElement('td');
  tdElem.textContent = 'Total';
  trEl.appendChild(tdElem);
  // this appends to the table on the html page
  CookieShop.tableDataEl.appendChild(trEl);
}

// render header row
renderHeaderRow();

// render shop rows function
CookieShop.prototype.renderShopRow = function() {
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = this.storeName;
  trEl.appendChild(tdEl);
// iterating over the cookies
  for(var i = 0; i < CookieShop.hours.length; i ++) {
    tdEl =  document.createElement('td');
    tdEl.textContent = this.cookieEachHour[i];
    trEl.appendChild(tdEl);
  }

  var tdElem = document.createElement('td');
  tdElem.textContent = this.totalCookiesForTheDay;
  trEl.appendChild(tdElem);
  CookieShop.tableDataEl.appendChild(trEl);
};


// render footer row
var renderFooterRow = function() {
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  var thEl = document.createElement('th');
  thEl.textContent = 'Total';
  trEl.appendChild(thEl);
  
  for(var i = 0; i <CookieShop.hours.length; i ++) {
    var storeHourlyTotals = 0;
    tdEl = document.createElement('td');
    
    for( var j = 0; j < CookieShop.allStores.length; j ++) {
      // console.log(CookieShop.cookieEachHour[i])
      storeHourlyTotals += CookieShop.allStores[j].cookieEachHour[i];
    }
    
    
    tdEl.textContent = storeHourlyTotals;
    trEl.appendChild(tdEl);
  }


  var tdElem = document.createElement('td');
  tdElem.textContent = CookieShop.allStoresTotal;
  trEl.appendChild(tdElem);
  CookieShop.tableDataEl.appendChild(trEl);
};




new CookieShop('Seattle', 23, 65, 6.3);
new CookieShop('Tokyo', 3, 24, 1.2);
new CookieShop('Dubai', 11, 38, 3.7);
new CookieShop('Paris', 20, 38, 2.3);
new CookieShop('Lima', 2, 16, 4.6);

renderFooterRow();

// build a function that will generate a new instance of shop.

var userForm = document.getElementById('user-form');
userForm.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
  event.preventDefault(); 
  new CookieShop(event.target.inputShopName.value, event.target.inputMinCustomer.value, event.target.inputMaxCustomer.value, event.target.inputAvgCookie.value);
  
}

// <!-- Seattle	23	65	6.3
// Tokyo	3	24	1.2
// Dubai	11	38	3.7
// Paris	20	38	2.3
// Lima	2	16	4.6 -->

// store HTML point of contact
// var seattleElement = document.getElementById('seattle');
// create The element
// var LiEl = document.createElement('li');
// give the element content
// LiEl.textContent = 'Seattle Shop';
// append to the DOM
// seattleElement.appendChild(LiEl);

// var LiEl = document.createElement('li');
// var ulEl = document.createElement('ul');
// var tdEl = document.createElement('td');
// var tbodyEl = document.createElement('tbody');
// var trEl = document.createElement('tr');
// var thEl = document.createElement('th');
// var table = document.getElementById('table-container');
// var storeSales = document.getElementById('stores');
// Seattle Shop


// var seattle = new Shops('Seattle', 23, 65, 6.3);
// var tokyo = new Shops('Tokyo', 3, 24, 1.2);
// var dubai = new Shops('Dubai', 11, 38, 3.7);
// var paris = new Shops('Paris', 20, 38, 2.3);
// var lima = new Shops('Lima', 2, 16, 4.6);
// console.log(seattle);

// <!-- Seattle	23	65	6.3
// Tokyo	3	24	1.2
// Dubai	11	38	3.7
// Paris	20	38	2.3
// Lima	2	16	4.6 -->

// // var seattle = {
// //   storeName: 'Seattle Headquarters',
// //   minCustomerEachHour: 23,
// //   maxCustomerEachHour: 65,
// //   averageCookiesPerCustomer: 6.3,
// //   customersEachHour: [],
// //   cookieEachHour: [],
// //   totalCookiesForTheDay: 0,




// calculateCustomers: function() {
//   for(var i = 0; i < hours.length; i++) {
//     var randomCustomer = getRandom(this.minCustomerEachHour, this.maxCustomerEachHour);
//     this.customersEachHour.push(randomCustomer);
//   }
// },


//   // calculateCookies: function() {
//   //   for(var i = 0; i < this.customersEachHour.length; i++) {
//   //     var cookies = Math.round(this.customersEachHour[i] * this.averageCookiesPerCustomer);
//   //     this.cookieEachHour.push(cookies);
//   //     this.totalCookiesForTheDay += cookies;
//   //     this.cookieEachHour.push(cookies);
//   //   }
//   // },

// render: function() {
//   this.calculateCustomers();
//   this.calculateCookies();
//   var ulEl = document.createElement('ul');
//   var h2El = document.createElement('h2');
//   h2El.textContent = this.storeName;
//   storeSales.appendChild(h2El);
//   for(var i = 0; i < hours.length; i++) {
//     var LiEl = document.createElement('li');
//     LiEl.textContent = `${hours[i]} : ${this.cookieEachHour[i]} Cookies`;
//     ulEl.appendChild(LiEl);
//   }
//   LiEl = document.createElement('li');
//   LiEl.textContent = `Total : ${this.totalCookiesForTheDay}Cookies`;
//   ulEl.appendChild(LiEl);
//   storeSales.appendChild(ulEl);

// },
// };

// var tokyo = {
//   storeName: 'Tokyo Headquarters',
//   minCustomerEachHour: 3,
//   maxCustomerEachHour: 24,
//   averageCookiesPerCustomer: 1.2,
//   customersEachHour: [],
//   cookieEachHour: [],
//   totalCookiesForTheDay: 0,





//   calculateCookies: function() {
//     for(var i = 0; i < this.customersEachHour.length; i++) {
//       var cookies = Math.round(this.customersEachHour[i] * this.averageCookiesPerCustomer);
//       this.cookieEachHour.push(cookies);
//       this.totalCookiesForTheDay += cookies;
//       this.cookieEachHour.push(cookies);
//     }
//   },

//   render: function() {
//     this.calculateCustomers();
//     this.calculateCookies();
//     var ulEl = document.createElement('ul');
//     var h2El = document.createElement('h2');
//     h2El.textContent = this.storeName;
//     storeSales.appendChild(h2El);
//     for(var i = 0; i < hours.length; i++) {
//       var LiEl = document.createElement('li');
//       LiEl.textContent = `${hours[i]} : ${this.cookieEachHour[i]} Cookies`;
//       ulEl.appendChild(LiEl);
//     }
//     LiEl = document.createElement('li');
//     LiEl.textContent = `Total : ${this.totalCookiesForTheDay}Cookies`;
//     ulEl.appendChild(LiEl);
//     storeSales.appendChild(ulEl);

//   },
// };

// Shops.prototype.shopHours = function () {
//   trEl = document.createElement('tr');
//   thEl = document.createElement('th');
//   thEl.textContent = '';
//   trEl.appendChild(thEl);
//   for(var i = 0; i < hours.length; i++) {
//     thEl = document.createElement('th');
//     tdEl = document.createElement('td');
//     tdEl.textContent = seattle.cookieEachHour;
//     ulEl.appendChild(LiEl);
//   };
// };


// Shops.prototype.calculateCustomers = function() {
//   for(var i = 0; i < hours.length; i++ ) {
//     var randomCustomer = getRandom(this.minCustomerEachHour, this.maxCustomerEachHour);
//     this.customersEachHour.push(randomCustomer);
//   }
// };

// Shops.prototype.cookiesEachHour = function () {
//   for(var i = 0; i < this.customersEachHour.length; i++) {
//     var cookies = Math.round(this.customersEachHour[i] * this.averageCookiesPerCustomer);
//     this.cookieEachHour.push(cookies);
//     this.totalCookiesForTheDay += cookies;
//     this.cookieEachHour.push(cookies);
//   }
// };

//   render: function() {
//     this.calculateCustomers();
//     this.calculateCookies();
//     var ulEl = document.createElement('ul');
//     var h2El = document.createElement('h2');
//     h2El.textContent = this.storeName;
//     storeSales.appendChild(h2El);
//     for(var i = 0; i < hours.length; i++) {
//       var LiEl = document.createElement('li');
//       LiEl.textContent = `${hours[i]} : ${this.cookieEachHour[i]} Cookies`;
//       ulEl.appendChild(LiEl);
//     }
//     LiEl = document.createElement('li');
//     LiEl.textContent = `Total : ${this.totalCookiesForTheDay}Cookies`;
//     ulEl.appendChild(LiEl);
//     storeSales.appendChild(ulEl);
//   },

// // Paris	20	38	2.3
// // Lima	2	16	4.6 -->

// var lima = {
//   storeName: 'Lima Headquarters',
//   minCustomerEachHour: 2,
//   maxCustomerEachHour: 16,
//   averageCookiesPerCustomer: 4.6,
//   customersEachHour: [],
//   cookieEachHour: [],
//   totalCookiesForTheDay: 0,

//   calculateCustomers: function() {
//     for(var i = 0; i < hours.length; i++ ) {
//       var randomCustomer = getRandom(this.minCustomerEachHour, this.maxCustomerEachHour);
//       this.customersEachHour.push(randomCustomer);
//     }
//   },

//   calculateCookies: function() {
//     for(var i = 0; i < this.customersEachHour.length; i++) {
//       var cookies = Math.round(this.customersEachHour[i] * this.averageCookiesPerCustomer);
//       this.cookieEachHour.push(cookies);
//       this.totalCookiesForTheDay += cookies;
//       this.cookieEachHour.push(cookies);
//     }
//   },

//   render: function() {
//     this.calculateCustomers();
//     this.calculateCookies();
//     var ulEl = document.createElement('ul');
//     var h2El = document.createElement('h2');
//     h2El.textContent = this.storeName;
//     storeSales.appendChild(h2El);
//     for(var i = 0; i < hours.length; i ++) {
//       var LiEl = document.createElement('li');
//       LiEl.textContent = `${hours[i]} : ${this.cookieEachHour[i]} Cookies`;
//       ulEl.appendChild(LiEl);
//     }
//     LiEl = document.createElement('li');
//     LiEl.textContent = `Total : ${this.totalCookiesForTheDay}Cookies`;
//     ulEl.appendChild(LiEl);
//     storeSales.appendChild(ulEl);
//   },

// };



// function getRandom(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// };

// thEl.textContent = 'Column 1';
// trEl.appendChild(thEl);

// thEl = document.createElement('th');
// thEl.textContent = 'Column 2';
// trEl.appendChild(thEl);

// thEl = document.createElement('th');
// thEl.textContent = 'Column 3';
// trEl.appendChild(thEl);

// thEl = document.createElement('th');
// thEl.textContent = 'Column 4';
// trEl.appendChild(thEl);


// tbodyEl.appendChild(trEl);
// trEl = document.createElement('tr');
// thEl = document.createElement('th');
// thEl.textContent = 'Data Row 1';
// trEl.appendChild(thEl);

// tdEl = document.createElement('td');
// tdEl.textContent = 'one';
// trEl.appendChild(tdEl);

// tdEl = document.createElement('td');
// tdEl.textContent = 'Two';
// trEl.appendChild(tdEl);

// tdEl = document.createElement('td');
// tdEl.textContent = 'Three';
// trEl.appendChild(tdEl);

// tbodyEl.appendChild(trEl);

// trEl = document.createElement('tr');
// thEl = document.createElement('th');
// thEl.textContent = 'Data Row 2';
// trEl.appendChild(thEl);

// tdEl = document.createElement('td');
// tdEl.textContent = 'one';
// trEl.appendChild(tdEl);

// tdEl = document.createElement('td');
// tdEl.textContent = 'two';
// trEl.appendChild(tdEl);

// tdEl = document.createElement('td');
// tdEl.textContent = 'three';
// trEl.appendChild(tdEl);

// tbodyEl.appendChild(trEl);





// table.appendChild(tbodyEl);

// seattle.shopHours();




// seattle.render();
// tokyo.render();
// dubai.render();
// paris.render();
// lima.render();