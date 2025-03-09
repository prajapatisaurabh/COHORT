import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import db from "./utils/db.js";
import cookieParser from "cookie-parser";

// import all routes
import router from "./routes/user.routes.js";

dotenv.config();

const app = express();
app.use(
  cors({
    origin: process.env.BASE_URL,
    methods: ["POST", "GET", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "User-Agent"],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("Hello World !!!");
});

app.get("/saurabh", (req, res) => {
  res.send("<h1>Hey I love you </h1> ");
});

app.get("/shital", (req, res) => {
  res.send("<h1>Hey I love you too </h1>");
});

// connec to db
db();

// user routes
app.use("/api/v1/users", router);

app.listen(port, () => {
  console.log("Authenitcation App listening on port " + port);
});
