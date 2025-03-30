import { ApiResonse } from "../utilis/api-response.js";
const healthCheck = (req, res) => {
  res.status(200).json(
    new ApiResonse(200, {
      message: "Server is running",
    }),
  );
};

export { healthCheck };
