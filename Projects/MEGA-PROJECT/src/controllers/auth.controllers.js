import { User } from "../models/user.models.js";
import { ApiResonse } from "../utilis/api-response.js";
import { asyncHandler } from "../utilis/async-handler.js";
import logger from "../utilis/logger.js";
import { emailVerificationMailGenContent, sendMail } from "../utilis/mail.js";

const registerUser = asyncHandler(async (req, res) => {
  const { email, username, password, fullname } = req.body;

  const exitingUser = await User.findOne({ email });
  if (exitingUser) {
    return res.status(400).json(
      new ApiResonse(400, {
        message: "User already exits",
      }),
    );
  }

  const user = await User.create({ email, username, password, fullname });

  if (!user) {
    return res.status(400).json(
      new ApiResonse(400, {
        message: "Not able to register user",
      }),
    );
  }

  const { unHashedToken, tokenExpiry } = user.generateTemporaryToken();
  user.emailVerificationToken = unHashedToken;
  user.emailVerificationExpiry = tokenExpiry;

  await user.save();

  const verificationURL = `${process.env.BASE_URL}/api/v1/auth/verify/${unHashedToken}`;
  const options = {
    email: user.email,
    subject: "Interview schedule at 10",
    mailGenContent: emailVerificationMailGenContent(
      user.username,
      verificationURL,
    ),
  };

  await sendMail(options);

  return res.status(201).json(
    new ApiResonse(201, {
      message: "User register sucessfully",
      success: true,
    }),
  );
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(400).json(
      new ApiResonse(400, {
        message: "Invalid email or password",
      }),
    );
  }

  if (!user.isEmailVerified) {
    return res.status(400).json(
      new ApiResonse(400, {
        message: "User not verified",
      }),
    );
  }

  if (!user.isPasswordCorrect(password)) {
    return res.status(400).json(
      new ApiResonse(400, {
        message: "Invalid email or password",
      }),
    );
  }

  const token = user.generateAccessToken();

  const cookieOptions = {
    httpOnly: true,
    secure: true,
    maxAge: 24 * 60 * 60 * 100,
  };

  res.cookie("token", token, cookieOptions);

  return res.status(201).json(
    new ApiResonse(201, {
      message: "User login sucessfully",
      success: true,
      token,
      user: { id: user._id, name: user.name, role: user.role },
    }),
  );
});

const logoutUser = asyncHandler(async (req, res) => {
  logger.info("request come to logout user");
  res.cookie("token", "", { expires: new Date(0) });

  return res.status(201).json(
    new ApiResonse(201, {
      message: "User logout successfully",
      success: true,
    }),
  );
});

const verifyEmail = asyncHandler(async (req, res) => {
  const { token } = req.params;

  if (!token) {
    return res.status(400).json(
      new ApiResonse(400, {
        message: "Token not found",
      }),
    );
  }

  const user = await User.findOne({
    emailVerificationToken: token,
    emailVerificationExpiry: { $gt: Date.now() },
  });

  if (!user) {
    return res.status(400).json(
      new ApiResonse(400, {
        message: "User not exits or Verify user link is expire",
      }),
    );
  }

  user.isEmailVerified = true;
  user.emailVerificationToken = null;
  user.emailVerificationExpiry = null;
  await user.save();

  return res.status(201).json(
    new ApiResonse(201, {
      message: "User Verified Sucessfully",
    }),
  );
});

const resendEmailVerification = asyncHandler(async (req, res) => {
  const { email, username, password, role } = req.body;

  //validation
});
const resetForgottenPassword = asyncHandler(async (req, res) => {
  const { email, username, password, role } = req.body;

  //validation
});

const refreshAccessToken = asyncHandler(async (req, res) => {
  const { email, username, password, role } = req.body;

  //validation
});

const forgotPasswordRequest = asyncHandler(async (req, res) => {
  const { email, username, password, role } = req.body;

  //validation
});

const changeCurrentPassword = asyncHandler(async (req, res) => {
  const { email, username, password, role } = req.body;

  //validation
});

const getCurrentUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id).select("-password");

  if (!user) {
    return res.status(400).json(
      new ApiResonse(400, {
        message: "Invalid email or password",
      }),
    );
  }

  return res
    .status(201)
    .json(
      new ApiResonse(201, { message: "User Information", success: true, user }),
    );
});

export {
  changeCurrentPassword,
  forgotPasswordRequest,
  getCurrentUser,
  loginUser,
  logoutUser,
  refreshAccessToken,
  registerUser,
  resendEmailVerification,
  resetForgottenPassword,
  verifyEmail,
};
