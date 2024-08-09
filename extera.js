// 1. Find the Missing Number in an Array
// Question: You have an array of integers from 1 to N with one number missing. Write a function to find the missing number.
// Solution:
const findMissingNumber = (arr) => {
  const n = arr.length + 1;
  const totalSum = (n * (n + 1)) / 2;
  const arraySum = arr.reduce((sum, num) => sum + num, 0);
  return totalSum - arraySum;
};

// 2. Reverse a String
// Question: Write a function to reverse a string.
// Solution:
const reverseString = (str) => {
  return str.split("").reverse().join("");
};

// 3. Check for Palindrome
// Question: Write a function to check if a given string is a palindrome.
// Solution:
const isPalindrome = (str) => {
  const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  return cleanedStr === cleanedStr.split("").reverse().join("");
};

// 4. Find the First Non-Repeating Character
// Question: Write a function to find the first non-repeating character in a string.
// Solution:
const firstNonRepeatingCharacter = (str) => {
  const charCount = {};
  for (const char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  for (const char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }
  return null;
};

// 5. Merge Two Sorted Arrays
// Question: Given two sorted arrays, merge them into a single sorted array.
// Solution:

const mergeSortedArrays = (arr1, arr2) => {
  let i = 0,
    j = 0;
  const result = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i++]);
    } else {
      result.push(arr2[j++]);
    }
  }
  return result.concat(arr1.slice(i)).concat(arr2.slice(j));
};

// 6. Find the Largest Sum of Consecutive Elements
// Question: Find the largest sum of consecutive elements (subarray) in an array.
// Solution:

const maxSubArraySum = (arr) => {
  let maxSum = arr[0];
  let currentSum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    currentSum = Math.max(arr[i], currentSum + arr[i]);
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
};

// 7. Flatten a Nested Array
// Question: Write a function to flatten a nested array.
// Solution:
const flattenArray = (arr) => {
  return arr.reduce(
    (flat, item) =>
      Array.isArray(item) ? flat.concat(flattenArray(item)) : flat.concat(item),
    []
  );
};

// 8. Implement a Debounce Function
// Question: Implement a debounce function that limits how often a function can be executed.
// Solution:
const debounce = (func, delay) => {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
};

// 9. Check for Balanced Parentheses
// Question: Write a function to check if the parentheses in a string are balanced.
// Solution:
const areParenthesesBalanced = (str) => {
  const stack = [];
  for (const char of str) {
    if (char === "(") {
      stack.push(char);
    } else if (char === ")") {
      if (stack.length === 0) return false;
      stack.pop();
    }
  }
  return stack.length === 0;
};

// 10. Find the Longest Common Prefix
// Question: Write a function to find the longest common prefix string amongst an array of strings.
// Solution:
const longestCommonPrefix = (strs) => {
  if (strs.length === 0) return "";
  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
      if (prefix === "") return "";
    }
  }
  return prefix;
};

// 11. Find Duplicates in an Array
// Question: Write a function to find duplicate values in an array.
// Solution:
const findDuplicates = (arr) => {
  const seen = new Set();
  const duplicates = new Set();
  for (const item of arr) {
    if (seen.has(item)) {
      duplicates.add(item);
    } else {
      seen.add(item);
    }
  }
  return Array.from(duplicates);
};

// 12. Remove Duplicates from an Array
// Question: Write a function to remove duplicate values from an array.
// Solution:
const removeDuplicates = (arr) => {
  return Array.from(new Set(arr));
};

// 13. Sum of All Numbers in a Range
// Question: Write a function to find the sum of all numbers in a range from start to end (inclusive).
// Solution:
const sumRange = (start, end) => {
  return ((end - start + 1) * (start + end)) / 2;
};

// 14. Find Common Elements in Two Arrays
// Question: Write a function to find common elements between two arrays.
// Solution:
const findCommonElements = (arr1, arr2) => {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);
  const common = [];
  for (const item of set1) {
    if (set2.has(item)) {
      common.push(item);
    }
  }
  return common;
};

// 15. Generate Fibonacci Sequence
// Question: Write a function to generate the Fibonacci sequence up to a given number n.
// Solution:
const fibonacci = (n) => {
  const sequence = [0, 1];
  for (let i = 2; i < n; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  return sequence.slice(0, n);
};

// 16. Sort an Array of Objects by Property
// Question: Write a function to sort an array of objects by a given property.
// Solution:
const sortByProperty = (arr, prop) => {
  return arr.sort((a, b) => (a[prop] > b[prop] ? 1 : -1));
};

// 17. Find the Missing Letter in a Range
// Question: Write a function to find the missing letter in a given range of letters.
// Solution:
const findMissingLetter = (arr) => {
  const start = arr[0].charCodeAt(0);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].charCodeAt(0) !== start + i) {
      return String.fromCharCode(start + i);
    }
  }
  return null;
};

// 18. Check for Anagrams
// Question: Write a function to check if two strings are anagrams of each other.
// Solution:
const areAnagrams = (str1, str2) => {
  const sortedStr1 = str1.split("").sort().join("");
  const sortedStr2 = str2.split("").sort().join("");
  return sortedStr1 === sortedStr2;
};

// 19. Find the Largest Prime Factor
// Question: Write a function to find the largest prime factor of a number.
// Solution:
const largestPrimeFactor = (n) => {
  let divisor = 2;
  while (n > 1) {
    if (n % divisor === 0) {
      n /= divisor;
    } else {
      divisor++;
    }
  }
  return divisor;
};

// 20. Convert a Number to Roman Numerals
// Question: Write a function to convert an integer to a Roman numeral.
// Solution:
const intToRoman = (num) => {
  const val = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const syb = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];
  let roman = "";
  for (let i = 0; i < val.length; i++) {
    const q = Math.floor(num / val[i]);
    num -= q * val[i];
    roman += syb[i].repeat(q);
  }
  return roman;
};
