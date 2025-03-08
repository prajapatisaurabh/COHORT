function Employee(name, position, salary) {
  // Initialize name, position, and salary properties
  this.name = name;
  this.position = position;
  this.salary = salary;
}

Employee.prototype.applyBonus = function (percent) {
  this.salary = this.salary + (this.salary * percent) / 100; // Just return new salary
  return this.salary;
};
