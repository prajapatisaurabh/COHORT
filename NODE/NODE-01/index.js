const express = require("express");
const fs = require("fs");
const maths = require("./math");

const app = express();


fs.writeFile("./test.txt", "Hello world !!", () => {});
// console.log(__filename);
// console.log(__dirname);

console.log(maths.sarvalo(1, 20));

// console.log(exports);
