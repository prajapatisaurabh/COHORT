const http = require("http");

const server = http.createServer(function (req, res) {
  console.log("Incomming requiest is comming");

  switch (req.method) {
    case "GET":
      {
        if (req.url == "/") {
          return res.end("Home Page");
        }
        if (req.url == "/express") {
          return res.end("Home page in express");
        }
      }
      break;
    case "POST":
      break;
    default:
      break;
  }

  console.log(req.method);
  console.log(req.url);
  res.end("Ye lo ji response");
});

server.listen(8080, function () {
  console.log("Server started");
});
