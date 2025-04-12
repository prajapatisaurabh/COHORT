import express from "express";

const app = express();

app.use(express.json());

import healthCheckRouter from "./routes/healthcheck.routes.js";
import authRouter from "./routes/auth.routes.js";

app.use("/api/v1/healthcheck", healthCheckRouter);
app.use("/api/v1/auth", authRouter);

export default app;
