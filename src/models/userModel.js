import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please Provide an username"],
  },
  email: {
    type: String,
    required: [true, "Please Provide an Email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please Provide an Password"],
  },
  // the better approach is to go with "Role"
  isVerified: {
    type: Boolean,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  forgotPasswordToken: String,
  forgotPasswordTokenExpiry: Date,
  verifyToken: String,
  verifyTokenExpiry: Date,
});

const User = mongoose.models.users || mongoose.model("users", userSchema);
export default User;
