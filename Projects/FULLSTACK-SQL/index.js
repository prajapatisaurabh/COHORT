import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import userRouter from "./routes/auth.route.js";

dotenv.config();

const app = express();

app.listen(process.env.PORT, () => {
  console.log("Backend is listing at port:" + process.env.PORT);
});

app.use("/api/v1/users", userRouter);

app.use(cookieParser());

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  return res.status(200).json({ Message: "Welcome to home page" });
});
