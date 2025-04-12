function solve(input) {
  const arr = [];
  for (const element of input) {
    if (!arr.includes(element.item)) {
      arr.push(element.item);
    }
  }
  return arr;
}

console.log(
  solve([
    { name: "Avi", item: "Phone" },
    { name: "Bea", item: "Wallet" },
    { name: "Avi", item: "Phone" },
  ])
);
