let arr = [1, 2, 3, 4, 5, 6];

arr.forEach(function (value, index) {
  // console.log(`Value at index ${index} is ${value}`);
});

if (!Array.prototype.myForEach) {
  Array.prototype.myForEach = function (userFn) {
    const original = this;
    for (let i = 0; i < original.length; i++) {
      userFn(original[i], i);
    }
  };
}

const res = arr.map((a) => a * 2);
console.log(res);
console.log(arr);

// Here we are writing polly of map method

if (!Array.prototype.myMap) {
  Array.prototype.myMap = function (userFn) {
    const result = [];

    for (let i = 0; i < this.length; i++) {
      const value = userFn(this[i], i);
      result.push(value);
    }

    return result;
  };
}

const myArray = arr.myMap((e) => e * 4);
console.log(myArray);
