import User from "../modal/User.model.js";
import crypto from "crypto";
import nodemailer from "nodemailer";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const registerUser = async (req, res) => {
  /**
   * Get Data
   * Validate Date
   * Check If already exits
   * if exits
   *    show message already exits
   * else
   *    register user
   * generate token to verification
   * send mail for varification
   *
   */
  const { name, email, password } = req.body;

  if (!name || !email | !password) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }

  try {
    const exitingUser = await User.findOne({ email });
    if (exitingUser) {
      return res.status(400).json({ message: "User already exits" });
    }

    const user = await User.create({
      name,
      email,
      password,
    });

    if (!user) {
      return res.status(400).json({ message: "User not registered" });
    }
    const token = crypto.randomBytes(32).toString("hex");

    user.verificationToken = token;
    await user.save();

    // send mail
    const transporter = nodemailer.createTransport({
      host: process.env.MAILTRAP_HOST,
      port: process.env.MAILTRAP_PORT,
      secure: false, // true for port 465, false for other ports
      auth: {
        user: process.env.MAILTRAP_USERNAME,
        pass: process.env.MAILTRAP_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.MAILTRAP_SENDEREMAIL,
      to: user.email,
      subject: "Verify your email",
      text: `Please click on the following link:
      ${process.env.BASE_URL}/api/v1/users/verify/${token}
      `,
    };
    await transporter.sendMail(mailOptions);

    return res
      .status(201)
      .json({ message: "User register sucessfully", success: true });
  } catch (error) {
    return res
      .status(403)
      .json({ message: "Not Able to connect database", error: error });
  }
};

const verifyUser = async (req, res) => {
  const { token } = req.params;
  console.log(token);
  if (!token) {
    return res.status(400).json({ message: "Token not found" });
  }

  const user = await User.findOne({ verificationToken: token });

  if (!user) {
    return res.status(400).json({ message: "User token not exits" });
  }

  user.isVerified = true;
  user.verificationToken = undefined;
  await user.save();
  return res.status(201).json({ message: "User Verified Sucessfully" });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !email) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    if (!user.isVerified) {
      return res.status(400).json({ message: "User not verified" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECIRET, {
      expiresIn: "24h",
    });
    const cookieOptions = {
      httpOnly: true,
      secure: true,
      maxAge: 24 * 60 * 60 * 100,
    };
    res.cookie("token", token, cookieOptions);

    return res.status(201).json({
      message: "User login sucessfully",
      success: true,
      token,
      user: { id: user._id, name: user.name, role: user.role },
    });
  } catch (error) {
    return res
      .status(403)
      .json({ message: "Error while loign ", error: error });
  }
};

const getMe = async (req, res) => {
  try {
    console.log("Reach at progile leavel" + req.user);

    const user = User.findById(req.user.id).select("-password");

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    return res.status(201).json({
      message: "User Information",
      success: true,
      user,
    });
  } catch (error) {
    return res
      .status(403)
      .json({ message: "Error while fatching ", error: error });
  }
};

const logoutUser = async (req, res) => {
  try {
    res.cookie("token", "", {
      expires: new Date(0),
    });

    return res.status(201).json({
      message: "User logout successfully",
      success: true,
    });
  } catch (error) {
    return res
      .status(403)
      .json({ message: "Error while fatching ", error: error });
  }
};

const forgotPassword = async (req, res) => {
  try {
    /**
     * Get Email -- req.body
     * Find user based on emial
     * resetToken + resetExpiry set to database
     * save database
     * sendEmail -> set ResetPasswrod link
     *
     */
  } catch (error) {
    return res
      .status(403)
      .json({ message: "Error while fatching ", error: error });
  }
};

const resetPassword = async (req, res) => {
  try {
    /**
     *  collect token from params + password.req.body
     * validatation
     * find user
     */

    const { token } = req.params;
    const { password } = req.body;

    try {
      const user = User.findOne({
        resetPasswordToken: token,
        resetPasswordExpires: { $gt: Date.now() },
      });

      /**
       * setPassword to user
       * resetToken , setExpire set undefines
       * save
       */
    } catch (error) {}
  } catch (error) {
    return res
      .status(403)
      .json({ message: "Error while fatching ", error: error });
  }
};

export {
  registerUser,
  verifyUser,
  login,
  getMe,
  logoutUser,
  forgotPassword,
  resetPassword,
};
