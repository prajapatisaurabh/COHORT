// You just need to implement the calculator function
function calculator(num1, num2, operator) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "/":
      return num1 / num2;
    case "*":
      return num1 * num2;
    case "-":
      return num1 - num2;
    default:
      return "Invalid Operator";
  }
}
