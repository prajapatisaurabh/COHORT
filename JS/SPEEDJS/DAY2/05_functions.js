function greet(name) {
  //   console.log(name);
}

greet("Saurabh");
greet("Shital");

let globalVar = "I am global";

function modifyGLobal() {
  globalVar = "I am modified";
  let blockScopedVar = "I am block scoped";
  //   console.log(blockScopedVar);
}

modifyGLobal();

let config = function () {
  let settings = {
    theme: "dark",
  };
  return settings;
};

(() => {
  //   console.log("first");
})();

let person1 = {
  name: "Ravi",
  greet: function () {
    console.log(`Hello ${this.name}`);
  },
};
