import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    password: String,
    roke: {
      type: String,
      enum: ["USER", "ADMIN"],
      default: "USER",
      isVerified: {
        type: Boolean,
        default: false,
      },
      verificationToken: {
        type: String,
      },
      resetPasswordToken: {
        type: String,
      },
      resetPasswordExpires: {
        type: Date,
      },
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);
export default User;
