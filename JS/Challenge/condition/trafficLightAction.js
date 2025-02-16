// You just need to implement the trafficLightAction function
function trafficLightAction(color) {
  if (color === "Red") {
    return "Stop";
  } else if (color == "Yellow") {
    return "Slow Down";
  } else if (color === "Green") {
    return "Go";
  } else {
    return "Invalid Color";
  }
}
