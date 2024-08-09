// 5.Task: Find and Modify

// Write a function that searches an array of objects for a specific person by name. If found, modify their age property. Print the updated array.

const people = [
  { name: "Jaba", age: 28 },
  { name: "Jamal", age: 22 },
  { name: "Malik", age: 32 },
  { name: "Eity", age: 27 },
  { name: "Karim", age: 35 },
];

const findAndModifyAge = (peopleArray, personName, newAge) => {
  const person = peopleArray.find((p) => p.name === personName);
  if (person) {
    person.age = newAge;
  }
  return peopleArray;
};

const updatedPeople = findAndModifyAge(people, "Malik", 33);
console.log(updatedPeople);

// Expected Output:
// [
//   { name: 'Jaba', age: 28 },
//   { name: 'Jamal', age: 22 },
//   { name: 'Malik', age: 33 },
//   { name: 'Eity', age: 27 },
//   { name: 'Karim', age: 35 }
// ]
