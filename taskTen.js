const students = [
  { name: "Azmin", grades: [85, 90, 78] },
  { name: "Boby", grades: [70, 75, 80] },
  { name: "Fatema", grades: [95, 100, 92] },
  { name: "Nahid", grades: [88, 85, 90] },
];

function calculateAverage(grades) {
  const total = grades.reduce((sum, grade) => sum + grade, 0);
  return total / grades.length;
}

function sortStudentsByAverage(studentsArray) {
  return studentsArray.sort((a, b) => {
    const averageA = calculateAverage(a.grades);
    const averageB = calculateAverage(b.grades);
    return averageB - averageA;
  });
}

const sortedStudents = sortStudentsByAverage(students);
console.log(sortedStudents);
