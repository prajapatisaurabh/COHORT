let name = "Saurabh";

let age = 40;

let isPaid = true;

var names = "saurabh";

let favuriteClass = null;

let hometwon;

let skills = ["HTML", "CSS", "JS"];

let studentProfile = {
  name: "Saurabh",
  age: 40,
  isPaid: true,
  favuriteClass: null,
  hometwon: undefined,
  skills: ["HTML", "CSS", "JS"],
};

hometwon = studentProfile;

const thisIsConstant = "This is constant";

skills = [studentProfile, studentProfile, studentProfile];

// Here this throw error because we can't change the value of constant
// thisIsConstant = "This is constant changed";

let weather = "sunny";

if (weather === "sunny") {
  console.log("It's sunny");
} else if (weather === "rainy") {
  console.log("It's rainy");
} else if (weather === "cloudy") {
  console.log("It's cloudy");
} else {
  console.log("It's unknown");
}

console.log(weather === "sunny");
