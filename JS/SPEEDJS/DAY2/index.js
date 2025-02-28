console.log("first");

const a = 10;
const b = 20;

const obj = {
  name: "Hello",
  greet: function () {
    console.log("Hello " + this.name);
  },
};

console.log("SUM : " + (a + b));

setTimeout(() => {
  console.log("I am delatedy");
}, 0);

setTimeout(() => obj.greet(), 10000);

console.log("Bye Bye");
