import { asyncHandler } from "../utilis/async-handler.js";

const registerUser = () =>
  asyncHandler(async (req, res) => {
    const { email, username, password, role } = req.body;
    
  });
