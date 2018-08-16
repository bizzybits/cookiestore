function generateRandom(min, max) {
  return Math.floor(Math.random() * (max - min +1)) + min;
}

var hours = ["10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM", "6 PM"]

//var storeLocation = function(locationName, minCust, maxCust) {
  //this.name = locationName;
  //this.minCust = minCust;
  //this.maxCust = maxCust;
//}


var location1 = {
  name: 'Pioneer Square',
  minCust: 17,
  maxCust: 88,
  avgCookieSale: 5.2,
  //hours: ["10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM", "6 PM"],
  total: 0,
  toHTML: function() {
    var HTML = '<ul>'+ location1.name;
    for (var cookieTime = 0; cookieTime < hours.length; cookieTime++) {
      var cookiesMade = location1.cookiesPerHour()
      location1.total += cookiesMade
      console.log('total cookies made' + location1.total )
      HTML += "<li>" + hours[cookieTime] + " : " + cookiesMade + " sold/hour </li>";
    }
      HTML += "TOTAL: " + location1.total + '</ul>';
    return HTML;
  },
  cookiesPerHour: function() {
    //I want this method to create a random number that is the number of cookies sold per hour at this location
    //i need the location name, --using min and max we're going ot get a random amount of customers between the min and max and then
    //it's going to calculate out a random number of cookies sold using the min and max # of customers

    //number of customers per hour and number of cookies each customer buys
    var customersHour = generateRandom(location1.minCust, location1.maxCust)
    var amountOfCookies = ((customersHour) * (location1.avgCookieSale))
    return parseInt(amountOfCookies);
  }
}

var location2 = {
  name: 'Portland Airport',
  minCust: 6,
  maxCust: 24,
  avgCookieSale: 1.2,
  total: 0,
  toHTML: function() {
    var HTML = '<ul>'+ location2.name;
    for (var cookieTime = 0; cookieTime < hours.length; cookieTime++) {
      var cookiesMade = location2.cookiesPerHour()
      location2.total += cookiesMade
      console.log('total cookies made' + location2.total )
      HTML += "<li>" + hours[cookieTime] + " : " + cookiesMade + " sold/hour </li>";
    }
      HTML += "TOTAL: " + location2.total + '</ul>';
    return HTML;
  },
  cookiesPerHour: function() {
    //I want this method to create a random number that is the number of cookies sold per hour at this location
    //i need the location name, --using min and max we're going ot get a random amount of customers between the min and max and then
    //it's going to calculate out a random number of cookies sold using the min and max # of customers

    //number of customers per hour and number of cookies each customer buys
    var customersHour = generateRandom(location2.minCust, location2.maxCust)
    var amountOfCookies = ((customersHour) * (location2.avgCookieSale))
    return parseInt(amountOfCookies);
  }

}


  var location3 = {
    name: 'Washington Square',
    minCust: 11,
    maxCust: 38,
    avgCookieSale: 1.9,
    hours: ["10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM", "6 PM"],
    total: 0,
    toHTML: function() {
      var HTML = '<ul>'+ location3.name;
    for (var cookieTime = 0; cookieTime < location3.hours.length; cookieTime++) {
      var cookiesMade = location3.cookiesPerHour()
      location3.total += cookiesMade
      console.log('total cookies made' + location3.total )
      HTML += "<li>" + location3.hours[cookieTime] + " : " + cookiesMade + " cookies sold/hour </li>";
    }
      HTML +=  "TOTAL: " + location3.total + '</ul>';
    return HTML;
  },
  cookiesPerHour: function() {
    //I want this method to create a random number that is the number of cookies sold per hour at this location
    //i need the location name, --using min and max we're going ot get a random amount of customers between the min and max and then
    //it's going to calculate out a random number of cookies sold using the min and max # of customers

    //number of customers per hour and number of cookies each customer buys
    var customersHour = generateRandom(location3.minCust, location3.maxCust)
    var amountOfCookies = ((customersHour) * (location3.avgCookieSale))
    return parseInt(amountOfCookies);
  }
}

  var location4 = {
    name: 'Sellwood',
    minCust: 20,
    maxCust: 48,
    avgCookieSale: 3.3,
    total: 0,
    toHTML: function() {
      var HTML = '<ul>'+ location4.name;
    for (var cookieTime = 0; cookieTime < hours.length; cookieTime++) {
      var cookiesMade = location4.cookiesPerHour()
      location4.total += cookiesMade
      console.log('total cookies made' + location4.total )
      HTML += "<li>" + hours[cookieTime] + " : " + cookiesMade + " sold/hour </li>";
    }
      HTML +=  "TOTAL: " + location4.total + '</ul>';
    return HTML;
  },
  cookiesPerHour: function() {
    //I want this method to create a random number that is the number of cookies sold per hour at this location
    //i need the location name, --using min and max we're going ot get a random amount of customers between the min and max and then
    //it's going to calculate out a random number of cookies sold using the min and max # of customers

    //number of customers per hour and number of cookies each customer buys
    var customersHour = generateRandom(location4.minCust, location4.maxCust)
    var amountOfCookies = ((customersHour) * (location4.avgCookieSale))
    return parseInt(amountOfCookies);
  }
}
  var location5 = {
    name: 'Pearl District',
    minCust: 3,
    maxCust: 24,
    avgCookieSale: 2.6,
    total: 0,
    toHTML: function() {
      var HTML = '<ul>'+ location5.name;
    for (var cookieTime = 0; cookieTime < hours.length; cookieTime++) {
      var cookiesMade = location5.cookiesPerHour()
      location5.total += cookiesMade
      console.log('total cookies made' + location5.total )
      HTML += "<li>" + hours[cookieTime] + " : " + cookiesMade + " sold/hour </li>";
    }
      HTML +=  "TOTAL: " + location5.total + '</ul>';
    return HTML;
  },
  cookiesPerHour: function() {
    //I want this method to create a random number that is the number of cookies sold per hour at this location
    //i need the location name, --using min and max we're going ot get a random amount of customers between the min and max and then
    //it's going to calculate out a random number of cookies sold using the min and max # of customers

    //number of customers per hour and number of cookies each customer buys
    var customersHour = generateRandom(location5.minCust, location5.maxCust)
    var amountOfCookies = ((customersHour) * (location5.avgCookieSale))
    return parseInt(amountOfCookies);
  }
}

var locations = [
  location1,
  location2,
  location3,
  location4,
  location5,
];
console.log(locations);

function buildList() {
  var list = document.getElementById('locations');
  for (var index = 0; index < locations.length; index++) {
    var location = locations[index];
    list.innerHTML += location.toHTML();
  }
}

//  header: function () {
  //  var table = doc.getElementById('locations');
    //var row = doc.createElement('tr');
    //var heading = document.createElement('th');
    //heading.setAttribute("colspan", "2");
    //heading.innerText = "Pioneer Place");
    //row.appendChild(heading);
    //table.appendChild(row);
  //}
//}

  //buildTable: function() {
    //var container = document.getElementById('table-container');
    //var table = document.getElementById('table');
    //table.setAttribute("border", "1");
    //this.header(table);
    //this.tableHours(table);
    //this.totalRow(table);
    //this.addChild(table);
  //}
//}
buildList()
location1.cookiesPerHour()

var list = document.getElementById('comments');
var listItem = document.createElement('li');
  listItem.innerText = "Customer Cookie Comments";
  //listItem.innerText += location.toHTML();
  list.appendChild(listItem);
