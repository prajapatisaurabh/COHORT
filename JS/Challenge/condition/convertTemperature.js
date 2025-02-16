// You just need to implement the convertTemperature function
function convertTemperature(value, scale) {
  // Convert temperature based on the scale ("C" to "F" or "F" to "C")

  if (scale === "C") {
    return (9 / 5) * value + 32;
  } else {
    return (5 / 9) * (value - 32);
  }
}
