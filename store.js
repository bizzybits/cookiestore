//function generateRandom(min, max) {
//  return Math.floor(Math.random() * (max - min +1)) + min;
//}


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
console.log('here')
function Store(name, minCust, maxCust, avgCookieSale) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieSale = avgCookieSale;
  this.total = 0;
  this.hours = ["10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM", "6 PM"];
  this.generateRandom = function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust +1)) + this.minCust;
  };
  this.cookiesPerHour = function() {
    var customersHour = this.generateRandom();
    var amountOfCookies = ((customersHour) * (this.avgCookieSale))
    return parseInt(amountOfCookies);

  };

  this.buildTable = function() {
    var locations = document.getElementById("locations");
    var table = document.createElement('table');
    var tbody = document.createElement('tbody');
    tbody.setAttribute('id',this.name);
    var row = document.createElement('tr');
    var theader = document.createElement('th');
    theader.innerText = this.name;
    row.appendChild(theader);
    //theader = document.createElement('th');
  //  theader.innerText = 'Hour';
    //row.appendChild(theader);
    tbody.appendChild(row);
    var row = document.createElement('tr');
    var theader = document.createElement('th');
    theader.innerText = 'Hours'
    row.appendChild(theader);
    var theader = document.createElement('th');
    theader.innerText = 'Cookies'
    row.appendChild(theader);
    tbody.appendChild(row);
    table.appendChild(tbody);
    locations.appendChild(table);
  };

  this.createData = function() {
    var findTBody1 = document.getElementById(this.name);
    //var findTBody2 = findTBody1.getElementById('tbody')[0];

    for(var hoursIndex = 0; hoursIndex <this.hours.length; hoursIndex++) {
      var generateRandom = this.cookiesPerHour();
      this.total += generateRandom;
      row = document.createElement('tr');
      tdata = document.createElement('td');
      tdata.innerText = this.hours[hoursIndex];
      row.appendChild(tdata);
      tdata = document.createElement('td');
      tdata.innerText = generateRandom;
      row.appendChild(tdata);
      findTBody1.appendChild(row);
    }
      row = document.createElement('tr');
      cell = document.createElement('th');
      cell.innerText = 'Total';
      row.appendChild(cell);
      cell = document.createElement('th');
      cell.innerText = this.total;
      row.appendChild(cell);
      findTBody1.appendChild(row);

  };

}


var stores = [];

stores.push(new Store('Pioneer Square', 17, 88, 5.2));
stores.push(new Store('Portland Airport', 6, 24, 1.4));
stores.push(new Store('Washington Square', 11, 38, 1.9));
stores.push(new Store('Sellwood', 20, 48, 3.3));
stores.push(new Store('Pearl District', 3, 24, 2.6));
console.log(stores);

for(var locationsIndex = 0; locationsIndex < stores.length; locationsIndex++) {
  stores[locationsIndex].cookiesPerHour();
  stores[locationsIndex].buildTable();
  stores[locationsIndex].createData();
}

function addStore(storeForm) {
  console.log(storeForm.storeName.value);
  console.log(storeForm.minCust.value);
  console.log(storeForm.maxCust.value);
  console.log(storeForm.avgCookieSale.value);

  var range = storeForm.maxCust.value - storeForm.minCust.value;
  console.log(range);

  var random = Math.random() * range;
  console.log(random);

  var customers = random + parseInt(storeForm.minCust.value);
  console.log(customers);
}

this.addStore();

function addNewShop() {
    var locName = document.getElementById("name").value;
    var minimum = document.getElementById("min").value;
    var maximum = document.getElementById("max").value;
    var averageSales = document.getElementById("average").value;
    if (document.getElementById('name').value.length == 0) {
       alert("Please fill in all fields in the form");
    } else {
        shops.push(new shopLocation(locName, minimum, maximum, averageSales));
        event.preventDefault();
        shops[shops.length - 1].buildTable(placeTable);
        var dropDownMenu = document.getElementById("dropDownList");
        var addDropDown = document.createElement("option");
        addDropDown.setAttribute("value", locName);
        addDropDown.innerText = locName;
        dropDownMenu.appendChild(addDropDown);
    }
}

var addShop = document.getElementById("submit");
addShop.addEventListener("click", addNewShop, false);



//method that also builds out table for me in the constructor function

//function buildList() {
  // var list = document.getElementById('locations');
  // for (var index = 0; index < locations.length; index++) {
    // var storeLocation = locations[index];
     // list.innerHTML += locations.toHTML();
    // header(storeLocation);
  // }
// }

//header = function (store) {
//  var table = document.getElementById('locations');
//  var row = document.createElement('tr');
//  var heading = document.createElement('th');
//  heading.setAttribute("colspan", "2");
//  heading.innerText = (store.name);
//  row.appendChild(heading);
//  table.appendChild(row);
//}


//buildTable = function() {
//  var container = document.getElementById('table-container');
//  var table = document.getElementById('table');
//  table.setAttribute("border", "1");
//  this.header(table);
//  this.tableHours(table);
//  this.totalRow(table);
//  this.appendChild(table);
//}


//buildList();
