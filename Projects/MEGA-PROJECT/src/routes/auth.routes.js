import { Router } from "express";
import { regiterUser } from "../controllers/auth.controllers.js";
import { validate } from "../middlewares/validator.middleware.js";
import { userRegistrationValidator } from "../validators/index.js";

const router = Router();

router.route("/").post(userRegistrationValidator(), validate, regiterUser);

export default router;
