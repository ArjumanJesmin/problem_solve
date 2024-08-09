// 8. Task: Unique Values

// Create an array of numbers with some duplicate values. Write a function to filter out the duplicate values and return a new array with only unique numbers. Print the result.

const numbers = [1, 2, 3, 2, 4, 5, 1, 6, 4, 7, 8, 5];

function getUniqueValues(numbersArray) {
  return [...new Set(numbersArray)];
}

const uniqueNumbers = getUniqueValues(numbers);
console.log(uniqueNumbers); // Output: [1, 2, 3, 4, 5, 6, 7, 8]
