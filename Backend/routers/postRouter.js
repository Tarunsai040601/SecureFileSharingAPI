const express = require("express");
const upload = require("../multer/multer.js");
const authMiddleware = require("../middlewares/authMiddleware.js");

const {
  getFiles,
  postFies,
  updateFile,
  getfilebyid,
  deletefile,
} = require("../controller/postController.js");

const postRouter = express.Router();

postRouter.get("/files", authMiddleware, getFiles);
postRouter.post(
  "/files",
  authMiddleware,
  upload.single("file"),
  postFies
);
postRouter.patch("/files/:id", authMiddleware, upload.single("file"),updateFile);
postRouter.get("/files/:id", authMiddleware, getfilebyid);
postRouter.delete("/files/:id", authMiddleware, deletefile);

module.exports = postRouter;