import { Router } from "express";
import {
  getCurrentUser,
  loginUser,
  logoutUser,
  registerUser,
  verifyEmail,
} from "../controllers/auth.controllers.js";
import { validate } from "../middlewares/validator.middleware.js";
import {
  userLoginValidator,
  userRegistrationValidator,
} from "../validators/index.js";
import { isLoggedIn } from "../middlewares/auth.middleware.js";

const authRouter = Router();

authRouter
  .route("/signup")
  .post(userRegistrationValidator(), validate, registerUser);

authRouter.route("/signin").post(userLoginValidator(), validate, loginUser);
authRouter.route("/verify/:token").get(verifyEmail);
authRouter.route("/logout").post(isLoggedIn, logoutUser);
authRouter.route("/me").get(isLoggedIn, getCurrentUser);

export default authRouter;
