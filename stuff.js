var customersPerHour = function(locations)
  this.location1 = location1;
  this.location2 = location2;
  this.location3 = location3;
  this.location4 = location4;
  this.location5 = location5;


customersPerHour.prototype.generateRandom = function (minCust, maxCust) {
  return Math.floor(Math.random() * (maxCust - minCust + 1)) + minCust;
}

console.log(location1.generateRandom(1,5));
console.log(location2.generateRandom(1,5));
