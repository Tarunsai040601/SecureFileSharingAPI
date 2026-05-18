const mongoose = require("mongoose");
const dotencv = require("dotenv").config();

const fileSchema = new mongoose.Schema(
  {
    fileName: { type: String, required: true },
    fileType: { type: String, required: true },
    fileSize: { type: String, request: true },
    fileUrl: { type: String, required: true },
    uploadedBy: { type: String },
  },
  { timestamps: true },
);

const fileModel = mongoose.model(process.env.fileCollection, fileSchema);
module.exports = fileModel;
