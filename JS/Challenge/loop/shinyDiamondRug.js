function shinyDiamondRug(n) {
  for (let i = 0; i < n; i++) {
    console.log(" ".repeat(n - i - 1) + "*".repeat(2 * i + 1));
  }
  // Lower part
  for (let i = n - 2; i >= 0; i--) {
    console.log(" ".repeat(n - i - 1) + "*".repeat(2 * i + 1));
  }
}

function invertedMountain(n) {
  for (let index = n; index >= 1; index--) {
    console.log("*".repeat(index));
  }
}

invertedMountain(3);
