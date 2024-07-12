function isLeapYear(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      return year % 400 === 0;
    }
    return true;
  }
  return false;
}

const yearToCheck = 2024;
if (isLeapYear(yearToCheck)) {
  console.log(`${yearToCheck} is a leap year! Happy New Year!`);
} else {
  console.log(`${yearToCheck} is not a leap year.`);
}
