const fs = require("fs");

// // Writing to a file
// fs.writeFileSync("./hello.txt", "Hello, this is a test file!", "utf8");
// console.log("File written successfully.");

// Reading from a file
console.log("read start");
fs.readFile("./hello.txt", "utf-8", function (err, content) {
  if (err) {
    console.log(err);
  } else {
    console.log(content);
  }
});
// console.log("File content:", data);
console.log("File Contec read ");

sum(2, 5, (val) => {
  console.log("Result", val);
});

console.log("After fun");

function sum(a, b, cb) {
  setTimeout(() => {
    cb(a + b);
  }, 5000);
}
