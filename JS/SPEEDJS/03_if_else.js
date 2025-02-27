function prepareChai(type) {
  if (type === "Masala Chai") {
    // console.log("Adding Spices to the chai");
  } else {
    // console.log("Pareparing Regular chai");
  }
}
prepareChai("Masala chai");
prepareChai("Ginger Tea");

function calculateTotal(amount) {
  if (amount > 1000) {
    return amount * 0.9;
  }
  return amount;
}

let finalBill = calculateTotal(1200);
// console.log(finalBill);

function checkTruthyOrFalse(value) {
  if (value) {
    console.log("TR");
  } else {
    console.log("Fa");
  }
}

checkTruthyOrFalse(1);
// checkTruthyOrFalse(0);
// checkTruthyOrFalse("Hitesh");
// checkTruthyOrFalse("");
// checkTruthyOrFalse([]);
// checkTruthyOrFalse([1, 2, 3, 4]);

function login(username, password) {
  if (username === "ADMIN" && password === "123") {
    console.log("Login SUcessfull");
  } else {
    console.log("Invalid Credentials");
  }
}

login("ADMIN", "123");
