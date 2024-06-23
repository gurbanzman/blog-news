import mongoose from "mongoose";
import { nanoid } from "nanoid";

const UserSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      default: () => nanoid(),
    },
    uid: {
      type: String,
      default: () => nanoid(),
    },
    email: {
      type: String,
      required: false,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: false,
    },
    newPassword: {
      type: String,
      required: false,
    },
    fname: {
      type:String,
      required: false,
    },
    lname: {
      type:String,
      required: false,
    },
    photoURL: {
      type: String,
      required: false,
    },
    logo: {
      type: String,
      required: false,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;
