const obj1 = {
  fname: "saurahb",
  lname: "Prajapati",
  getFullName: function () {
    return `${this.fname} and ${this.lname}`;
  },
};

const obj2 = {
  fname: "shital",
  lname: "Prajapati",
  //   getFullName: function () {
  //     return `${this.fname} and ${this.lname}`;
  //   },
};

obj2.__proto__ = obj1;
obj1.__proto__ = null;
console.log(obj1.getFullName());
console.log(obj2.getFullName());
console.log(obj2.toString());
console.log(obj1.toString());
