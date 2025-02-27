Array.prototype.myReduce = function (cb, intialValue = undefined) {
  let acc = intialValue || this[0];
  //   const acc = this[0];
  for (let i = 1; i < this.length; i++) {
    acc = cb(this[i], i);
  }
  return acc;
};

const result = [1, 2, 3, 4, 5].reduce((a, b) => a + b);
console.log(result);
