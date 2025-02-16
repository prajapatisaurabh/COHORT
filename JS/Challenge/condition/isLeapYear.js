function isLeapYear(year) {
  let div = year % 4;
  if (div === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return "Leap Year";
      } else {
        return "Not a Leap Year";
      }
    } else {
      return "Leap Year";
    }
  } else {
    return "Not a Leap Year";
  }
}

console.log(isLeapYear(2012));
