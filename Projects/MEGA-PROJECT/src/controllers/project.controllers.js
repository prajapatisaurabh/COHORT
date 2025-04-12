import { Project } from "../models/project.models.js";
import { ApiResonse } from "../utilis/api-response.js";
import { asyncHandler } from "../utilis/async-handler.js";
import logger from "../utilis/logger.js";

const getProjects = asyncHandler(async (req, res) => {
  try {
    const projects = await Project.find({}).lean();

    return res.status(200).json(
      new ApiResonse(200, {
        message: "proejct information store in database",
        data: projects,
        success: true,
      }),
    );
  } catch (error) {
    return res.status(400).json(
      new ApiResonse(4000, {
        message: "proejct information store in database",
        error: error.message,
        success: true,
      }),
    );
  }
});

const getProjectById = asyncHandler(async (req, res) => {
  const projects = await Project.find({});

  return res.status(201).json(
    new ApiResonse(201, {
      message: "All project data factched sucessfully",
      data: projects,
      success: true,
    }),
  );
});

const createProject = asyncHandler(async (req, res) => {
  logger.info("Craete project: " + req.body);
  const { name, description } = req.body;

  const resdd = await Project.create({
    name,
    description,
    createBy: req.user._id,
  });
  return res.status(201).json(
    new ApiResonse(201, {
      message: "proejct information store in database",
      success: true,
    }),
  );
});

const updateProject = async (req, res) => {
  // update project
};

const deleteProject = async (req, res) => {
  // delete project
};

const getProjectMembers = async (req, res) => {
  // get project members
};

const addMemberToProject = async (req, res) => {
  // add member to project
};

const deleteMember = async (req, res) => {
  // delete member from project
};

const updateMemberRole = async (req, res) => {
  // update member role
};

export {
  addMemberToProject,
  createProject,
  deleteMember,
  deleteProject,
  getProjectById,
  getProjectMembers,
  getProjects,
  updateMemberRole,
  updateProject,
};
