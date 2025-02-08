// 90 - A geade
// 80 - B grade
// 70 - C grade
// 60 >= D grade
// 50 >= F grade

function calculateGrade(score) {
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) return "D";
  else return "F";
}

console.log(calculateGrade(99));
console.log(calculateGrade(90));
console.log(calculateGrade(86));
console.log(calculateGrade(40));
console.log(calculateGrade(58));
console.log(calculateGrade(69));
console.log(calculateGrade(70));
