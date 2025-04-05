import { validationResult } from "express-validator";
import { ApiError } from "../utilis/api-error.js";

export const validate = (req, res, next) => {
  const error = validationResult(req);

  if (error.isEmpty()) {
    return next();
  }

  const extractedError = [];

  error.array().map((err) =>
    extractedError.push({
      [err.path]: err.msg,
    }),
  );

  throw new ApiError(420, "Received data is not valid", extractedError);
};
