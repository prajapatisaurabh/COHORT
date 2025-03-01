const user = {
  name: "Saurabh",
  age: 40,
  password: "Muje Jane Do",
};

const proxyUser = new Proxy(user, {
  get(target, prop) {
    if (prop === "password") {
      return new Error("Access Denied");
    }
    return target[prop];
  },

  set(target, prop, newVal) {
    //
  },
});
// console.log(proxyUser.password);

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function negativeIndex(arr) {
  return new Proxy(arr, {
    get(target, prop) {
      const index = Number(prop);
      if (index < 0) {
        return target[target.length + index];
      }
      return target[index];
    },
    set(target, prop, newValue) {
      const index = Number(prop);
      if (index < 0) {
        target[target.length + index] = newValue;
      } else {
        target[index] = newValue;
      }
      return true;
    },
  });
}

let newArray = negativeIndex(arr);
console.log(newArray);
console.log(newArray[1]);
console.log(newArray);
newArray[1] = 22;
console.log(newArray);
