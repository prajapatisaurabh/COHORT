class Person {
  lname;
  fname;
  constructor(fname, lname) {
    this.fname = fname;
    this.lname = lname;
  }

  getFullName() {
    return `${this.fname} Love ${this.lname}`;
  }
}
const p1 = new Person("Saurabh", "Prajapati");
console.log(p1.getFullName());

const p2 = new Person("Shital", "Sartanpara");
console.log(p2.getFullName());



