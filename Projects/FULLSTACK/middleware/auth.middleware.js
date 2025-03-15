import jwt from "jsonwebtoken";

export const isLoggedIn = async (req, res, next) => {
  try {
    console.log(req.cookies);
    let token = req.cookies.token || "";
    console.log("Token found ", token ? "YES" : "NO");

    if (!token) {
      console.log("NO Token");
      return res
        .status(401)
        .json({ message: "Authentication failed", success: false });
    }

    const decodedData = jwt.verify(token, process.env.JWT_SECIRET);
    console.log("Decoded data" + decodedData);
    req.user = decodedData;

    next();
  } catch (error) {
    console.log("Authentication Error");
    return res
      .status(500)
      .json({ message: "Internal Server error", success: false });
  }
  next();
};
