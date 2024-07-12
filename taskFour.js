const cars = [
  { make: "Toyota", model: "Camry", year: 2018 },
  { make: "Honda", model: "Accord", year: 2015 },
  { make: "Tesla", model: "Model 3", year: 2020 },
  { make: "Ford", model: "Mustang", year: 2016 },
  { make: "Chevrolet", model: "Impala", year: 2017 },
];

const sortCarsByYear = (carsArray) => {
  return carsArray.sort((a, b) => a.year - b.year);
};

const sortedCars = sortCarsByYear(cars);
console.log(sortedCars);

// Expected Output:
// [
//     { make: 'Honda', model: 'Accord', year: 2015 },
//     { make: 'Ford', model: 'Mustang', year: 2016 },
//     { make: 'Chevrolet', model: 'Impala', year: 2017 },
//     { make: 'Toyota', model: 'Camry', year: 2018 },
//     { make: 'Tesla', model: 'Model 3', year: 2020 }
// ]
