import mongoose from "mongoose";

import { IUser } from "../IModels/user.interface";

const userSchema: mongoose.Schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,

      required: true,

      unique: true,

      trim: true,

      lowercase: true,
    },

    password: {
      type: String,

      required: true,
    },

    role: {
      type: String,

      required: true,
    },

    createdAt: {
      type: Date,

      default: Date.now,
    },
  },
  { timestamps: true }
);

const User = mongoose.model<IUser>("User", userSchema);

export default User;
