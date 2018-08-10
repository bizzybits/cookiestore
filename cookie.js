function generateRandom(min, max) {
  return Math.floor(Math.random() * (max - min +1)) + min;
}


var location1 = {
  name: 'Pioneer Square',
  minCust: 17,
  maxCust: 88,
  avgCookieSale: 5.2,
  hours: ["10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM", "6 PM"],
  total: 0,
  toHTML: function() {
    var HTML = '<ul>'+ location1.name;
    for (var cookieTime = 0; cookieTime < location1.hours.length; cookieTime++) {
      HTML += "<li>" + location1.hours[cookieTime] + " : " + location1.cookiesPerHour() + " cookies sold/hour </li>";
    }
      HTML += '</ul>';
    return HTML;
  },
  cookiesPerHour: function() {
    //I want this method to create a random number that is the number of cookies sold per hour at this location
    //i need the location name, --using min and max we're going ot get a random amount of customers between the min and max and then
    //it's going to calculate out a random number of cookies sold using the min and max # of customers

    //number of customers per hour and number of cookies each customer buys
    var customersHour = generateRandom(location1.minCust, location1.maxCust)
    console.log(customersHour)
    var amountOfCookies = ((customersHour) * (location1.avgCookieSale))
    console.log(amountOfCookies)
    return parseInt(amountOfCookies);
    var cookies = location1.cookiesPerHour() + location1.total
    console.log(total);
  }

}

var location2 = {
  name: 'Portland Airport',
  minCust: 6,
  maxCust: 24,
  avgCookieSale: 1.2,
  hours: ["10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM", "6 PM"],
  toHTML: function() {
    var HTML = '<ul>'+ location2.name;
    for (var cookieTime = 0; cookieTime < location2.hours.length; cookieTime++) {
      HTML += "<li>" + location2.hours[cookieTime] + "</li>";
    }
      HTML += '</ul>';
    return HTML;
  }
}


  var location3 = {
    name: 'Washington Square',
    minCust: 11,
    maxCust: 38,
    avgCookieSale: 1.9,
    hours: ["10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM", "6 PM"],
    toHTML: function() {
      var HTML = '<ul>'+ location3.name;
      for (var cookieTime = 0; cookieTime < location3.hours.length; cookieTime++) {
        HTML += "<li>" + location3.hours[cookieTime] + "</li>";
      }
        HTML += '</ul>';
      return HTML;
    }
}

  var location4 = {
    name: 'Sellwood',
    minCust: 20,
    maxCust: 48,
    avgCookieSale: 3.3,
    hours: ["10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM", "6 PM"],
    toHTML: function() {
      var HTML = '<ul>'+ location4.name;
      for (var cookieTime = 0; cookieTime < location4.hours.length; cookieTime++) {
        HTML += "<li>" + location4.hours[cookieTime] + "</li>";
      }
        HTML += '</ul>';
      return HTML;
    }
}

  var location5 = {
    name: 'Pearl District',
    minCust: 3,
    maxCust: 24,
    avgCookieSale: 2.6,
    hours: ["10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM", "6 PM"],
    toHTML: function() {
      var HTML = '<ul>'+ location5.name;
      for (var cookieTime = 0; cookieTime < location5.hours.length; cookieTime++) {
        HTML += "<li>" + location5.hours[cookieTime] + "</li>";
      }
        HTML += '</ul>';
      return HTML;
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
  console.log(locations.length);
  var list = document.getElementById('locations');
  for (var index = 0; index < locations.length; index++) {
    var location = locations[index];
    list.innerHTML += location.toHTML();
  }
}

buildList()
location1.cookiesPerHour()
//var list = document.getElementById('storeLocations');
//console.log(list)
  //list.innerHTML += location.toHTML();
