const p1 = {
  fname: "Hitesh",
  lname: "Suarbh",
  address: {
    h: 1,
    s: 1,
  },
};

const p1KaString = JSON.stringify(p1);
console.log(p1KaString);

const p2 = JSON.parse(p1KaString);

p2.fname = "Name";
p2.lname = "no name";

const p3 = {
  fname: p1.fname,
  lname: p1.lname,
  address: p1.address,
};

p3.address.h = "1000";

console.log(p1);
console.log(p2);
console.log(p3);

// above concept called Shallow copy (...)

// how we can do deepcoy
