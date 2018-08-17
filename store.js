function generateRandom(min, max) {
  return Math.floor(Math.random() * (max - min +1)) + min;
}

var hours = ["10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM", "6 PM"]

//  var location = new Object ();
//    location.name = 'Pioneer Square';
//    location.maxCust = 88;
//    location.minCust = 17;
//    location.avgCookieSale = 5.2;
//    location.cookiesPerHour = function() {
//        var customersHour = generateRandom(this.minCust, this.maxCust)
//        var amountOfCookies = ((customersHour) * (this.avgCookieSale))
//        return parseInt(amountOfCookies);
//      }

function Store(name, minCust, maxCust, avgCookieSale) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieSale = avgCookieSale;
  this.cookiesPerHour = function () {
    var customersHour = generateRandom(this.minCust, this.maxCust);
    var amountOfCookies = ((customersHour) * (this.avgCookieSale))
  };
  this.buildTable = function() {
    var container = document.getElementById('table-container');
    var table = document.getElementById('table');
    table.setAttribute("border", "1");
    this.header(table);
    this.tableHours(table);
    this.totalRow(table);
    this.appendChild(table);
}


}

var pioneerLocation = new Store('Pioneer Square', 17, 88, 5.2);
var airportLocation = new Store('Portland Airport', 6, 24, 1.4);
var washingtonLocation = new Store('Washington Square', 11, 38, 1.9);
var sellwoodLocation = new Store('Sellwood', 20, 48, 3.3);
var pearlLocation = new Store('Pearl District', 3, 24, 2.6);



//var location1 = {
//  name: 'Pioneer Square',
//  minCust: 17,
//  maxCust: 88,
//  avgCookieSale: 5.2,
//  total: 0,
//  toHTML: function() {
//    var HTML = '<ul>'+ location1.name;
//  for (var cookieTime = 0; cookieTime < hours.length; cookieTime++) {
//    var cookiesMade = location1.cookiesPerHour()
//    location1.total += cookiesMade
//    console.log('total cookies made' + location1.total )
//    HTML += "<li>" + hours[cookieTime] + " : " + cookiesMade + " sold/hour </li>";
//  }
//    HTML += "TOTAL: " + location1.total + '</ul>';
//  return HTML;
//  },
//    cookiesPerHour: function() {
//    var customersHour = generateRandom(location1.minCust, location1.maxCust)
//    var amountOfCookies = ((customersHour) * (location1.avgCookieSale))
//    return parseInt(amountOfCookies);
//  }
//}


var locations = [
  pioneerLocation,
  airportLocation,
  washingtonLocation,
  sellwoodLocation,
  pearlLocation,
];

//method that also builds out table for me in the constructor function

function buildList() {
   var list = document.getElementById('locations');
   for (var index = 0; index < locations.length; index++) {
     var storeLocation = locations[index];
     // list.innerHTML += locations.toHTML();
     header(storeLocation);
   }
 }

header = function (store) {
  var table = document.getElementById('locations');
  var row = document.createElement('tr');
  var heading = document.createElement('th');
  heading.setAttribute("colspan", "2");
  heading.innerText = (store.name);
  row.appendChild(heading);
  table.appendChild(row);
}


//buildTable = function() {
  //var container = document.getElementById('table-container');
  //var table = document.getElementById('table');
  //table.setAttribute("border", "1");
  //this.header(table);
  //this.tableHours(table);
  //this.totalRow(table);
  //this.appendChild(table);
//}


buildList();
