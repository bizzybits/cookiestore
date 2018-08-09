function generateRandom(min, max) {
  return Math.floor(Math.random() * (max - min +1)) + min;
}

var location1 = {
  name: 'Pioneer Square',
  minCust: 17,
  maxCust: 88,
  avgCookieSale: 5.2,
  hours: ["10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM", "6 PM"],
  toHTML: function() {
    var HTML = '<ul>'+ location1.name;
    for (var cookieTime = 0; cookieTime < location1.hours.length; cookieTime++) {
      HTML += "<li>" + location1.hours[cookieTime] + "</li>";
    }
      HTML += '</ul>';
    return HTML;
  }

}

var location2 = {
  name: 'Portland Airport',
  minCust: 6,
  maxCust: 24,
  avgCookieSale: 1.2,
  toHTML: function() {
    return '<li>'+ location2.name +  location2.minCust +  location2.maxCust + location2.avgCookieSale +'</li>';
  }
}

  var location3 = {
    name: 'Washington Square',
    minCust: 11,
    maxCust: 38,
    avgCookieSale: 1.9,
  toHTML: function() {
    return '<li>'+ location3.name +  location3.minCust +  location3.maxCust + location3.avgCookieSale +'</li>';
  }
}

  var location4 = {
    name: 'Sellwood',
    minCust: 20,
    maxCust: 48,
    avgCookieSale: 3.3,
  toHTML: function() {
    return '<li>'+ location4.name +  location4.minCust +  location4.maxCust + location4.avgCookieSale +'</li>';
  }
}

  var location5 = {
    name: 'Pearl District',
    minCust: 3,
    maxCust: 24,
    avgCookieSale: 2.6,
  toHTML: function() {
    return '<li>'+ location5.name +  location5.minCust +  location5.maxCust + location5.avgCookieSale +'</li>';
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

//buildList();
var list = document.getElementById('storeLocations');
  list.innerHTML += location1.toHTML();
