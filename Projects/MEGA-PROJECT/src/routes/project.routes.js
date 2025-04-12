import { Router } from "express";
import { isLoggedIn } from "../middlewares/auth.middleware.js";
import {
  createProject,
  getProjects,
} from "../controllers/project.controllers.js";
import { validate } from "../middlewares/validator.middleware.js";
import { projectValidator } from "../validators/index.js";

const projectRouter = Router();

projectRouter.route("/all").get(isLoggedIn, getProjects);
projectRouter
  .route("/createProject")
  .post(isLoggedIn, projectValidator(), validate, createProject);

export default projectRouter;
