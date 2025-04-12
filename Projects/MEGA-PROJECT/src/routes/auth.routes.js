import { Router } from "express";
import {
  loginUser,
  registerUser,
  verifyEmail,
} from "../controllers/auth.controllers.js";
import { validate } from "../middlewares/validator.middleware.js";
import {
  userLoginValidator,
  userRegistrationValidator,
} from "../validators/index.js";

const authRouter = Router();

authRouter
  .route("/signup")
  .post(userRegistrationValidator(), validate, registerUser);

authRouter.route("/signin").post(userLoginValidator(), validate, loginUser);
authRouter.route("/verify/:token").get(verifyEmail);

export default authRouter;
