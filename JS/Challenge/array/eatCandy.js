// You just need to implement the eatCandy function
function eatCandy(candyJar) {
  return candyJar.splice(0, candyJar.length - 1);
}

console.log(eatCandy(["A", "B", "C"]));
