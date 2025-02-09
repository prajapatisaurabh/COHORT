let arr = [1, 2, 4, 5, 6, 7, 0];

console.log(arr.every((item) => item < 1));

console.log(arr);

const arr1 = [0, 1, 2, [3, 4, [5]]];
console.log(arr1.flat(2));

const mArr1 = [1, 2, 1];

console.log(mArr1.flatMap((num) => (num == 1 ? [2, 2] : 1)));
