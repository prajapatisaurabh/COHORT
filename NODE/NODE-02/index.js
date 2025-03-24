const fs = require("fs");
const crypt = require("crypto");

process.env.UV_THREADPOOL_SIZE = 1;

setTimeout(() => console.log("Set Timeout "), 100);
setImmediate(() => console.log("Set Immediate "), 0);

fs.readFile("sample.txt", "utf-8", function (err, data) {
  setTimeout(() => console.log("Set Timeout 1"), 0);
  setImmediate(() => console.log("Set Immediate 1"), 0);

  const start = Date.now();

  crypt.pbkdf2("password", "salt", 10000, 1024, "sha512", (err, data) => {
    console.log(Date.now() - start);
    console.log("password 1 hasheded");
  });
  crypt.pbkdf2("password", "salt", 10000, 1024, "sha512", (err, data) => {
    console.log(Date.now() - start);
    console.log("password 10 hasheded");
  });

  crypt.pbkdf2("password", "salt", 10000, 1024, "sha512", (err, data) => {
    console.log(Date.now() - start);
    console.log("password 11 hasheded");
  });

  crypt.pbkdf2("password", "salt", 10000, 1024, "sha512", (err, data) => {
    console.log(Date.now() - start);
    console.log("password 12 hasheded");
  });

  crypt.pbkdf2("password", "salt", 10000, 1024, "sha512", (err, data) => {
    console.log(Date.now() - start);
    console.log("password 13 hasheded");
  });
});

// console.log("hello");
