// 1.Task: Array Filtering and Mapping

// Create an array of objects, each representing a person with properties like name, age, and gender. Write a function to filter out all females and then map the remaining people to an array of names. Print the final result.

const people = [
  { name: "Jamal", age: 28, gender: "male" },
  { name: "Jamila", age: 22, gender: "female" },
  { name: "Milon", age: 32, gender: "male" },
  { name: "Eity", age: 27, gender: "female" },
  { name: "Rasal", age: 35, gender: "male" },
];

const filterMales = (peopleArray) => {
  return peopleArray.filter((person) => person.gender === "male");
};

const getNames = (filteredPeople) => {
  return filteredPeople.map((person) => person.name);
};

const males = filterMales(people);
const maleNames = getNames(males);

console.log(maleNames); // Output:[ 'Jamal', 'Milon', 'Rasal' ]
