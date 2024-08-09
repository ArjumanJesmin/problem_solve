// 09. Task: Find Maximum Value:

// Write a function that takes an array of numbers and returns the maximum value.

function findMaxValue(numbersArray) {
  return Math.max(...numbersArray);
}

const numbers = [5, 12, 3, 9, 25, 8];
const maxValue = findMaxValue(numbers);
console.log(`The maximum value is: ${maxValue}`); // Output: The maximum value is: 25
