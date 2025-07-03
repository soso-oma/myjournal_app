// models/user.js
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullname: String, // optional, if you're using it
  username: { type: String, unique: true, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  securityQuestion: { type: String, required: true },
  securityAnswer: { type: String, required: true }
});

export default mongoose.model("User", userSchema);
