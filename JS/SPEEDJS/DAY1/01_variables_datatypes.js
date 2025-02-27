let num = 10;
let name = "Name";

let person = {
  name: "Hitesh",
  age: 19,
  isStudent: true,
};

let num1 = "20";
let convertedNums = Number(num1);
// console.log(convertedNums);
// console.log(typeof convertedNums);

let convertedNum1 = +num;
// console.log(convertedNum1);
// console.log(typeof convertedNum1);

let str = 123;
let convertedString = String(str);
console.log(convertedString);

let a = 10;
let b = 11;

let sum = a + b;
let quotient = a / b;
let reminder = a % b;
let power = a ** b;

let x = 5;
let y = 10;

// console.log(x == y);
// console.log(x != y);
// console.log(x > y);
// console.log(x < y);
// console.log(x <= y);

// console.log(Math.max(5, 6, 1, 2, 3, 5, 6, 66));

console.log(Math.floor(Math.random() * 6) + 1);

let firstName = "Saurabh";
let lastName = "Prajapati";

let fullName = `${firstName} ${lastName}`;
console.log(fullName);
console.log(fullName.slice(0, 5));
