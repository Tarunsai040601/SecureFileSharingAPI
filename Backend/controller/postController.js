const filedata = require("../models/fileSchema.js");

// get all files
const getFiles = async (req, res) => {
  try {
    let files;

    if (req.user.role === "admin") {
      files = await filedata.find();
    } else {
      files = await filedata.find({ uploadedBy: req.user.id });
    }

    res.status(200).json({
      message: "Files fetched successfully",
      files,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// upload file
const postFies = async (req, res) => {
  try {
    const { isPublic } = req.body;

    if (!req.file) {
      return res.status(400).json({
        message: "File is required",
      });
    }

    const newFile = await filedata.create({
      fileName: req.file.originalname,
      fileType: req.file.mimetype,
      fileSize: req.file.size.toString(),
      fileUrl: req.file.path,
      isPublic,
      uploadedBy: req.user.id,
    });

    res.status(201).json({
      message: "File uploaded successfully",
      newFile,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// update file
const updateFile = async (req, res) => {
  try {
    const file = await filedata.findById(req.params.id);

    if (!file) {
      return res.status(404).json({
        message: "File not found",
      });
    }

    if (
      file.uploadedBy.toString() !== req.user.id &&
      req.user.role !== "admin"
    ) {
      return res.status(403).json({
        message: "Unauthorized to update this file",
      });
    }

    let updateData = {
      ...req.body,
    };

    // if new file uploaded
    if (req.file) {
      updateData.fileName = req.file.originalname;
      updateData.fileType = req.file.mimetype;
      updateData.fileSize = req.file.size.toString();
      updateData.fileUrl = req.file.path;
    }

    const updatedFile = await filedata.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true, runValidators: true }
    );

    res.status(200).json({
      message: "Updated successfully",
      updatedFile,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// get file by id
const getfilebyid = async (req, res) => {
  try {
    const singleFile = await filedata.findById(req.params.id);

    if (!singleFile) {
      return res.status(404).json({
        message: "File not found",
      });
    }

    if (
      singleFile.uploadedBy.toString() !== req.user.id &&
      req.user.role !== "admin"
    ) {
      return res.status(403).json({
        message: "Unauthorized access this file",
      });
    }

    res.status(200).json({
      message: "File fetched successfully",
      singleFile,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// delete file
const deletefile = async (req, res) => {
  try {
    const file = await filedata.findById(req.params.id);

    if (!file) {
      return res.status(404).json({
        message: "File not found",
      });
    }

    if (
      file.uploadedBy.toString() !== req.user.id &&
      req.user.role !== "admin"
    ) {
      return res.status(403).json({
        message: "Unauthorized to delete this file",
      });
    }

    await filedata.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getFiles,
  postFies,
  updateFile,
  getfilebyid,
  deletefile,
};