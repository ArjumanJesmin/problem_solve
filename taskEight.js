const numbers = [1, 2, 3, 2, 4, 5, 1, 6, 4, 7, 8, 5];

function getUniqueValues(numbersArray) {
  return [...new Set(numbersArray)];
}

const uniqueNumbers = getUniqueValues(numbers);
console.log(uniqueNumbers); // Output: [1, 2, 3, 4, 5, 6, 7, 8]
