var location1 = {
  name: 'Pioneer Square',
  minCust: 17,
  maxCust: 88,
  avgCookieSale: 5.2,
  //sayHello: function() {
  //  alert('Hello. My name is ' + location1.name + '.');
  toHTML: function() {
    return '<li>'+ location1.name +  location1.minCust +  location1.maxCust + location1.avgCookieSale +'</li>';
    }
}

var location2 = {
  name: 'Portland Airport',
  minCust: 6,
  maxCust: 24,
  avgCookieSale: 1.2,
    //sayHello: function() {
    //  alert('Hello. My name is ' + location1.name + '.');
  toHTML: function() {
    return '<li>'+ location2.name +  location2.minCust +  location2.maxCust + location2.avgCookieSale +'</li>';
  }
}

  var location3 = {
    name: 'Washington Square',
    minCust: 11,
    maxCust: 38,
    avgCookieSale: 1.9,
      //sayHello: function() {
      //  alert('Hello. My name is ' + location1.name + '.');
  toHTML: function() {
    return '<li>'+ location3.name +  location3.minCust +  location3.maxCust + location3.avgCookieSale +'</li>';
  }
}

  var location4 = {
    name: 'Sellwood',
    minCust: 20,
    maxCust: 48,
    avgCookieSale: 3.3,
    //sayHello: function() {
    //  alert('Hello. My name is ' + location1.name + '.');
  toHTML: function() {
    return '<li>'+ location4.name +  location4.minCust +  location4.maxCust + location4.avgCookieSale +'</li>';
  }
}

  var location5 = {
    name: 'Pearl District',
    minCust: 3,
    maxCust: 24,
    avgCookieSale: 2.6,
      //sayHello: function() {
      //  alert('Hello. My name is ' + location1.name + '.');
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
//console.log(locations.length);

function buildList() {
  console.log(locations.length);
  var list = document.getElementById('locations');
  for (var index = 0; index < locations.length; index++) {
    var location = locations[index];
    list.innerHTML += location.toHTML();
  }
}

buildList();
