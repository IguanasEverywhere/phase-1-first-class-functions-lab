// Code your solution in this file!
const returnFirstTwoDrivers = function(driverArr) {
  let firstTwoDrivers = [];
  firstTwoDrivers = driverArr.slice(0, 2);
  return firstTwoDrivers;
}

const returnLastTwoDrivers = function(driverArr) {
  let lastTwoDrivers = [];
  lastTwoDrivers = driverArr.slice(driverArr.length - 2, driverArr.length);
  return lastTwoDrivers;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(num) {
  return function(fare) {
    return fare * num;
  }
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function (driverArr, driverSelectFn) {
  return driverSelectFn(driverArr);
}