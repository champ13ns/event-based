import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true, unique: true },
  },
  {
    timestamps: true,
  }
);

export const userModel = mongoose.model("user", userSchema);