import { body } from "express-validator";

const userRegistrationValidator = () => {
  return [
    body("email").trim().notEmpty().isEmail().withMessage("Email is invalid"),
    body("username")
      .trim()
      .notEmpty()
      .withMessage("username is required")
      .isLength({ min: 3 })
      .withMessage("username should be atleast 3 character")
      .isLength({ max: 14 })
      .withMessage("username should can not exceed 14"),
  ];
};

const userLoginValidator = () => {
  return [
    body("email").isEmail().withMessage("Email is not valid"),
    body("password").notEmpty().withMessage("Password can not be empty"),
  ];
};

export { userRegistrationValidator, userLoginValidator };
