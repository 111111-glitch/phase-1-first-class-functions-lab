// Code your solution in this file!

const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
  };
  
  // Function: returnLastTwoDrivers
  const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
  };
  
  // Array: selectingDrivers
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  // Function: createFareMultiplier
  const createFareMultiplier = function(multiplier) {
    return function(fare) {
      return fare * multiplier;
    };
  };
  
  // Function: fareDoubler
  const fareDoubler = createFareMultiplier(2);
  
  // Function: fareTripler
  const fareTripler = createFareMultiplier(3);
  
  // Function: selectDifferentDrivers
  const selectDifferentDrivers = function(drivers, selectFunction) {
    return selectFunction(drivers);
  };
  
  // Example usage
  const driversArray = ['Antonia', 'Nuru', 'Amari', 'Mo'];
  
  console.log(returnFirstTwoDrivers(driversArray)); // Output: ["driver1", "driver2"]
  console.log(returnLastTwoDrivers(driversArray));  // Output: ["driver3", "driver4"]
  console.log(fareDoubler(10));  // Output: 20
  console.log(fareTripler(10));  // Output: 30
  console.log(selectDifferentDrivers(driversArray, returnFirstTwoDrivers));  // Output: ["driver1", "driver2"]
  console.log(selectDifferentDrivers(driversArray, returnLastTwoDrivers));   // Output: ["driver3", "driver4"]