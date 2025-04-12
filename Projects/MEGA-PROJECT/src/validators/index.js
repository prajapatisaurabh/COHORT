import { body } from "express-validator";

const userRegistrationValidator = () => {
  return [
    body("avatar.url")
      .optional()
      .isURL()
      .withMessage("Avatar URL must be a valid URL"),
    body("avatar.localpath")
      .optional()
      .isString()
      .withMessage("Avatar local path must be a string"),
    body("username")
      .trim()
      .notEmpty()
      .withMessage("Username is required")
      .isLength({ min: 3 })
      .withMessage("Username should be at least 3 characters")
      .isLength({ max: 14 })
      .withMessage("Username cannot exceed 14 characters")
      .isAlphanumeric()
      .withMessage("Username must contain only letters and numbers"),
    body("email")
      .trim()
      .notEmpty()
      .withMessage("Email is required")
      .isEmail()
      .withMessage("Email is invalid"),
    body("fullname")
      .trim()
      .notEmpty()
      .withMessage("Full name is required")
      .isLength({ max: 50 })
      .withMessage("Full name cannot exceed 50 characters"),
    body("password")
      .notEmpty()
      .withMessage("Password is required")
      .isLength({ min: 8 })
      .withMessage("Password must be at least 8 characters long")
      .matches(/\d/)
      .withMessage("Password must contain at least one number")
      .matches(/[A-Z]/)
      .withMessage("Password must contain at least one uppercase letter")
      .matches(/[a-z]/)
      .withMessage("Password must contain at least one lowercase letter")
      .matches(/[@$!%*?&#]/)
      .withMessage("Password must contain at least one special character"),
    body("isEmailVerified")
      .optional()
      .isBoolean()
      .withMessage("isEmailVerified must be a boolean"),
    body("forgotPasswordToken")
      .optional()
      .isString()
      .withMessage("Forgot password token must be a string"),
    body("forgotPasswordExpiry")
      .optional()
      .isISO8601()
      .withMessage("Forgot password expiry must be a valid date"),
    body("refreshToken")
      .optional()
      .isString()
      .withMessage("Refresh token must be a string"),
    body("emailVerificationToken")
      .optional()
      .isString()
      .withMessage("Email verification token must be a string"),
    body("emailVerificationExpiry")
      .optional()
      .isISO8601()
      .withMessage("Email verification expiry must be a valid date"),
  ];
};

const userLoginValidator = () => {
  return [
    body("email")
      .trim()
      .notEmpty()
      .withMessage("Email is required")
      .isEmail()
      .withMessage("Email is invalid"),
    body("password").notEmpty().withMessage("Password is required"),
  ];
};

const projectValidator = () => {
  return [
    body("name").trim().notEmpty().withMessage("name is required"),
    body("description").notEmpty().withMessage("description is required"),
  ];
};

export { userRegistrationValidator, userLoginValidator, projectValidator };
