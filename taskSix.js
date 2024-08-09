// 6.Task: Array Reduction

// Create an array of numbers. Write a function that uses the reduce method to calculate the sum of all even numbers in the array.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sumOfEvenNumbers(numbersArray) {
  return numbersArray.reduce((sum, num) => {
    if (num % 2 === 0) {
      return sum + num;
    } else {
      return sum;
    }
  }, 0);
}

const sumEven = sumOfEvenNumbers(numbers);
console.log(sumEven); // Output: 30
