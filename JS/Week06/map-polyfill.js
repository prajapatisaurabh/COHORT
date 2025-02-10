// Polyfill for Array.prototype.map
if (!Array.prototype.myMap) {
  Array.prototype.myMap = function (userFn) {
    const result = [];

    for (let i = 0; i < this.length; i++) {
      result.push(userFn(this[i], i));
    }

    return result;
  };
}

// Define the array
const arr = [1, 2, 3, 4, 5];

// Use the custom myMap method
const myArray = arr.myMap((e) => e * 4);

console.log(myArray); // Output: [2, 4, 6, 8, 10]
