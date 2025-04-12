import { Router } from "express";
import { registerUser } from "../controllers/auth.controllers.js";
import { validate } from "../middlewares/validator.middleware.js";
import { userRegistrationValidator } from "../validators/index.js";

const authRouter = Router();

authRouter
  .route("/signup")
  .post(userRegistrationValidator(), validate, registerUser);

export default authRouter;
