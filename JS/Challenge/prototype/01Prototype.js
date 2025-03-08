// You need to implement the Robot constructor function and its prototype method

function Robot(name, batteryLevel) {
  this.name = name;
  this.batteryLevel = batteryLevel;
}
Robot.prototype.charge = function () {
  let internalBatLevel = this.batteryLevel;
  internalBatLevel = internalBatLevel + 20;

  if (this.internalBatLevel > 100) {
    internalBatLevel = 100;
    return internalBatLevel;
  }
  return internalBatLevel;
};
