// You just need to implement the totalWater function
function totalWater(waterAmounts) {
  return waterAmounts.reduce((a, b) => a + b);
}

console.log(totalWater([1, 2, 3, 4]));
