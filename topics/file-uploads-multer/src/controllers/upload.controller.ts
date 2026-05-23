import type { Request, Response } from "express";
import {
  deleteFile,
  getFile,
  getFiles,
  uploadFiles,
} from "../services/upload.service";

export const fileUploadController = async (req: Request, res: Response) => {
  const files = req.files as Express.Multer.File[];
  const uploadedFiles = await uploadFiles(files);

  res.status(200).json({
    success: true,
    message: "Files uploaded successfully",
    data: uploadedFiles,
  });
};

export const getFilesController = async (req: Request, res: Response) => {
  const files = await getFiles();

  res.status(200).json({
    success: true,
    message: "Files fetched successfully",
    data: files,
  });
};

export const getFileController = async (
  req: Request<{ id: string }>,
  res: Response,
) => {
  const id = req.params.id;
  const file = await getFile(id);

  res.status(200).json({
    success: true,
    message: "File fetched successfully",
    data: file,
  });
};

export const deleteFileController = async (
  req: Request<{ id: string }>,
  res: Response,
) => {
  const id = req.params.id;
  await deleteFile(id);

  res.status(200).json({
    success: true,
    message: "File deleted successfully",
  });
};
