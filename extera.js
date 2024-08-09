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
