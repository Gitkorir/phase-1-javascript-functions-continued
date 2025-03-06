// code your solution here
// index.js

// Function for Saturday fun activity
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

// Function for Monday work activity
const mondayWork = function (activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
};

// Function to wrap an adjective with the specified delimiter
function wrapAdjective(delimiter = "*") {
  return function (adjective) {
    return `You are ${delimiter}${adjective}${delimiter}!`;
  };
}

module.exports = {
  saturdayFun,
  mondayWork,
  wrapAdjective,
};
