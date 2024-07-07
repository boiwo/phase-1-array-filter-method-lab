// Code your solution here
// index.js

// Function to find drivers that match the provided name (case insensitive)
function findMatching(drivers, name) {
    return drivers.filter(driver =>
      driver.toLowerCase() === name.toLowerCase()
    );
  }
  
  // Function to find drivers whose names start with the provided letters
  function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver =>
      driver.startsWith(letters)
    );
  }
  
  // Function to find drivers whose name matches the provided name exactly
  function matchName(drivers, name) {
    return drivers.filter(driver =>
      driver.name === name
    );
  }
  
  module.exports = {
    findMatching,
    fuzzyMatch,
    matchName
  };
  