// You just need to implement the getDayOfWeek function
function getDayOfWeek(day) {
  // Return the corresponding day of the week based on the input number
  if (day === 1) {
    return "Monday";
  }
  if (day === 2) {
    return "Tuesday";
  }
  if (day === 3) {
    return "Wednesday";
  }
  if (day === 4) {
    return "Thursday";
  }
  if (day === 5) {
    return "Friday";
  }
  if (day === 6) {
    return "Saturday";
  }
  if (day === 7) {
    return "Sunday";
  } else {
    return "Enter valid number";
  }
}
