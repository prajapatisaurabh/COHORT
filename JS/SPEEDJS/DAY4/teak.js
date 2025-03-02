const fs = require("fs");

function readFileWithPromise(filepth, encoding) {
  return new Promise((resolve, reject) => {
    fs.readFile(filepth, encoding, (err, content) => {
      if (err) {
        reject(err);
      } else {
        resolve(content);
      }
    });
  });
}

const result = readFileWithPromise("./hello.txt", "utf-8");

fs.readFile("./hello.txt", "utf-8", function (err, contnt) {
  if (err) {
    console.log("Error while reading", err);
  } else {
    console.log("Read Successful");
    fs.write("./backup.txt", contnt, function (err, content) {
      if (err) {
        console.log("Error while write", err);
      } else {
        fs.unlink("./hello.txt", function (e) {
          if (e) {
            console.log("Error in file delete");
          } else {
            console.log("file delete sucess");
          }
        });
      }
    });
  }
});
