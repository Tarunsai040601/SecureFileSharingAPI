
const mongoose = require("mongoose");
const dotencv = require("dotenv").config();

const authSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, request: true },
  role: { type: String, required: true, enum: ["admin", "user"] },
});

const authModel = mongoose.model(process.env.authCollection, authSchema);
module.exports = authModel;
