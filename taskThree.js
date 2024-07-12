const square = (num) => {
  return num * num;
};

const double = (num) => {
  return num * 2;
};

const addFive = (num) => {
  return num + 5;
};

const composedFunction = (num) => {
  const squared = square(num);
  const doubled = double(squared);
  const result = addFive(doubled);
  return result;
};

const testNumber = 3;
const finalResult = composedFunction(testNumber);
console.log(finalResult); // Output: 23
