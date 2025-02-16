// const person = {
//   name: "Shital",
//   age: 25,
//   greet: function () {
//     console.log(`hello my wife: ${this.name}`);
//   },
// };

// console.log(person);

// Here we have created using object literal

// const person = new Object();
// person.age = 15;
// person.name = "Shital";
// person.greet = function () {
//   console.log("Hello Shital ");
// };

// person.greet();

// Here is class base approach

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log("Say Hello to Me MR." + this.name);
  }
}

const alice = new Person("Alice", 24);
alice.greet();
