import mongoose from "mongoose";
import { nanoid } from "nanoid";

const UserSchema = new mongoose.Schema(
  {
    uid: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: false,
    },
    displayName: {
      type:String
    },
    photoURL: {
      type:String
    },
    id: {
      type: String,
      default: () => nanoid(),
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Auth = mongoose.models.Auth || mongoose.model("Auth", UserSchema);

export default Auth;
