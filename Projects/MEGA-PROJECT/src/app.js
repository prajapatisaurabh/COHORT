import express from "express";
import healthCheckRouter from "./routes/healthcheck.routes.js";
import authRouter from "./routes/auth.routes.js";
import morgan from "morgan";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());

// HTTP request logger middleware
app.use(morgan("dev")); // You can also use 'combined' for more details
app.use(cookieParser());

app.use("/api/v1/healthcheck", healthCheckRouter);
app.use("/api/v1/auth", authRouter);

export default app;
