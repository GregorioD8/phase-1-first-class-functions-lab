// returns a new array containing the first two drivers from the passed-in array
const returnFirstTwoDrivers = drivers => [drivers[0], drivers[1]] 

// returns a new array with the last two drivers from the passed-in array 
const returnLastTwoDrivers = drivers => drivers.slice(drivers.length -2)

// array containing two elements: the two functions that we previously defined 
//const selectingDrivers = drivers => [returnFirstTwoDrivers(drivers), returnLastTwoDrivers(drivers)]
let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

//higher-order function that takes in one argument, an integer, and returns a function that will multiply a fare for a ride accordingly
function createFareMultiplier(number) { 
    return fare => fare * number
    }

//doubles fare 
const fareDoubler = fare => createFareMultiplier(2)(fare)

//triples fare
const fareTripler = fare => createFareMultiplier(3)(fare)

//takes two arguments, an array of the names of Scuber's drivers and either the returnFirstTwoDrivers() or returnLastTwoDrivers() function. Based on these two arguments, selectDifferentDrivers() will return either the first two drivers or the last two drivers.
function selectDifferentDrivers(drivers, differentDrivers) {
    return differentDrivers(drivers)

    }
