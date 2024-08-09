// 1.  write a function fiendOddSum() that will take the array as the input parameter and will return the of the odd numbers

function findOddSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      sum += arr[i];
    }
  }
  return sum;
}

const result1 = findOddSum([10, 21, 32, 43, 54]);
console.log(result1); // Output: 64 (21 + 43)

// 2. Write a JavaScript function named isLeapYear that takes a single argument year (a number) and checks if the year is a leap year. The function should print "This is a Leap year" if the year is a leap year and "This year is not a leap year" if it is not.
function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return "This is a Leap year";
  } else {
    return "This year is not a leap year";
  }
}

const result2 = isLeapYear(2020);
console.log(result2); // Output: "This is a Leap year"

// 3. Write a function named sumOfNumbers that takes an array of numbers as an input and returns the sum of all the numbers in the array. The function should iterate through the array, adding each number to a running total, and then return this total sum.

function sumOfNumbers(arr) {
  let sum = 0; // Step 1: Initialize the sum to 0

  for (let i = 0; i < arr.length; i++) {
    // Step 2: Iterate through the array
    sum += arr[i]; // Step 3: Add each number to the sum
  }

  return sum; // Step 4: Return the total sum
}

const result3 = sumOfNumbers([1, 2, 3, 4, 5]);
console.log(result3); // Output: 15 (1 + 2 + 3 + 4 + 5)

// 4. Write a function named multiplyNumbers that takes an array of numbers as an input and returns the product of all the numbers in the array. The function should iterate through the array, multiplying each number with a running total, and then return this total product.

function multiplyNumbers(arr) {
  let product = 1; // Step 1: Initialize the product to 1

  for (let i = 0; i < arr.length; i++) {
    // Step 2: Iterate through the array
    product *= arr[i]; // Step 3: Multiply each number by the product
  }

  return product; // Step 4: Return the total product
}
const result = multiplyNumbers([1, 2, 3, 4, 5]);
console.log(result); // Output: 120 (1 * 2 * 3 * 4 * 5)

// or  ==========================
function calculateProduct(n) {
  return n * (n - 1); // Apply the formula n1 = n * (n - 1)
}
const result4 = calculateProduct(5);
console.log(result4); // Output: 20 (5 * 4)

// 5. Write a function named factorialReverse that takes a non-negative integer n as an input and returns the factorial of n, but in reverse order. The factorial of a number n is the product of all positive integers less than or equal to n. For example, the factorial of 5 (denoted as 5!) is 5 * 4 * 3 * 2 * 1 = 120.

// The reverse order of the factorial should be returned as a string, where the digits are reversed. For example, for n = 5, the factorial is 120, and the reversed order would be "021".

function factorialReverse(n) {
  // Helper function to calculate factorial
  function factorial(num) {
    let result = 1;
    for (let i = 1; i <= num; i++) {
      result *= i;
    }
    return result;
  }

  // Calculate the factorial of n
  const fact = factorial(n);

  // Convert the factorial to a string and reverse it
  const reversedString = fact.toString().split("").reverse().join("");

  return reversedString;
}
const result5 = factorialReverse(5);
console.log(result5); // Output: "021" (Factorial of 5 is 120, reversed is "021")

// 6. Write a function named sortArray that takes an array of integers as input and returns a new array where the elements are sorted in ascending order. The function should handle arrays of any length, including arrays with duplicate elements, and should not modify the original array.

function sortArray(arr) {
  // Step 1: Create a copy of the original array
  const newArray = [...arr];

  // Step 2: Sort the new array in ascending order
  newArray.sort((a, b) => a - b);

  // Step 3: Return the sorted array
  return newArray;
}
const result6 = sortArray([5, 3, 8, 1, 2]);
console.log(result6); // Output: [1, 2, 3, 5, 8]
