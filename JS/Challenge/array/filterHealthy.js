// You just need to implement the filterHealthy function
function filterHealthy(items) {
  return items.findIndex((el) => el === "Burger");
}

console.log(filterHealthy(["A", "B", "Burger", "C"]));
