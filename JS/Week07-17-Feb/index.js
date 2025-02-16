function crateCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

const couter = crateCounter();
console.log(couter());
console.log(couter());

(function () {
  console.log("Hitesh");
})();
