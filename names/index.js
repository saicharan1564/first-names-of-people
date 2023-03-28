const peopleNamesArray = require("../country/state/city/index");

const utilityFunc = require("../utilities/utils/index");

const getPeopleInCity = (peopleNamesArray) => {
  return utilityFunc(peopleNamesArray);
};

console.log(getPeopleInCity);

module.exports = getPeopleInCity;
