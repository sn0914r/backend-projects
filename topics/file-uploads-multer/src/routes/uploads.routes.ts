import express from "express";
import { upload } from "../middlewares/upload.middleware";
import {
  deleteFileController,
  fileUploadController,
  getFileController,
  getFilesController,
} from "../controllers/upload.controller";

export const uploadRouter = express.Router();

uploadRouter.post("/uploads", upload, fileUploadController);
uploadRouter.get("/uploads", getFilesController);
uploadRouter.get("/uploads/:id", getFileController);
uploadRouter.delete("/uploads/:id", deleteFileController);
