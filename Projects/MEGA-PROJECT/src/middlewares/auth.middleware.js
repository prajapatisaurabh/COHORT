import { ApiResonse } from "../utilis/api-response.js";
import logger from "../utilis/logger.js";
import jwt from "jsonwebtoken";

export const isLoggedIn = async (req, res, next) => {
  try {
    let token = req.cookies.token || "";

    logger.info(`Found Token ${token}`);

    if (!token) {
      res.status(400).json(
        new ApiResonse(400, {
          message: "Authentication failed Token not exits",
          success: false,
        }),
      );
    }

    const decodedData = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    logger.info("DecodedData : " + decodedData);
    req.user = decodedData;

    next();
  } catch (error) {
    logger.error("Authentication failed in middleware no Token found");
    res.status(400).json(
      new ApiResonse(
        400,
        {
          message: "Authentication failed in middleware no Token found",
          success: false,
        },
        error.message,
      ),
    );
  }

  next();
};
