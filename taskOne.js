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
