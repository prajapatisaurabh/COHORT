function shinyDiamondRug(n) {
  let result = "";
  for (let i = 0; i < n; i++) {
    result += " ".repeat(n - i - 1) + "*".repeat(2 * i + 1) + "\n";
  }
  // Lower part
  for (let i = n - 2; i >= 0; i--) {
    result += " ".repeat(n - i - 1) + "*".repeat(2 * i + 1) + "\n";
  }
  return result.trim();
}

function invertedMountain(n) {
  for (let index = n; index >= 1; index--) {
    console.log("*".repeat(index));
  }
}

invertedMountain(3);
