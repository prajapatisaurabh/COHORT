console.log("first");

if (!Array.prototype.myFilter) {
  Array.prototype.myFilter = function (userFn) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
      if (userFn(this[i])) {
        result.push(this[i]);
      }
    }
    return result;
  };
}

const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr.filter((a) => a > 3));

console.log(arr.myFilter((a) => a < 3));
