// Code your solution here
//We have an array of drivers with various information. We need to write functions using the filter() method so that PickMeUp Taxi service employees can easily query the data. Run the tests to see what conditions need to be met by each function before you start writing JavaScript code.

// findMatching- This function takes an array of drivers' names and a string as arguments, and returns the matching list of drivers. The function should be case insensitive.

function findMatching(drivers, name){
    let theMatch = drivers.filter( elem => elem.toUpperCase() === name.toUpperCase())
        return theMatch;
}

// fuzzyMatch - This function takes an array of drivers' names and a string as arguments for querying the array, and returns all drivers whose names begin with the provided letters.

function fuzzyMatch(drivers,letter){
    let startWithLetter = drivers.filter(elem => elem.startsWith(letter))
    return startWithLetter;
}

// matchName - This function takes an array of driver objects and a string as arguments. Each driver object has two properties: name and hometown. The function should return each element whose name property matches the provided string argument.
function matchName(drivers, name){
    let theMatch = drivers.filter(elem => elem.name === name)
    return theMatch;
}