function Counter() {
  this.count = 0;
}

Counter.prototype.increment = function () {
  return ++this.count; // Fixed typo and returning updated value
};

Counter.prototype.decrement = function () {
  return --this.count; // Returning updated value
};
