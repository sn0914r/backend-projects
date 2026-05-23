import { nanoid } from "nanoid";
import { cloudinary } from "../clients/cloudinary.client";
import { AppError } from "../errors/AppError";
import { formatFileSize } from "../utils/byteToMBConverter";

export type UploadedFilesMetaData = {
  fileName: string;
  fileSize: string;
  fileMimeType: string;
  url: string;
};

export const uploadFilesInCloudinary = async (files: Express.Multer.File[]) => {
  if (!files || files.length === 0)
    throw new AppError("No files uploaded!", 400, "NO_FILES_UPLOADED");

  const uploadedFiles = await Promise.all(
    files.map(async (file) => {
      const base64 = file.buffer.toString("base64");
      const dataUri = `data:${file.mimetype};base64,${base64}`;

      const result = await cloudinary.uploader.upload(dataUri, {
        folder: "/file-uploads-with-multer",
        public_id: `${nanoid()}-${file.originalname}`,
      });

      return {
        fileName: file.originalname,
        fileSize: formatFileSize(file.size),
        fileMimeType: file.mimetype,
        url: result.url,
        public_id: result.public_id
      };
    }),
  );

  return uploadedFiles as UploadedFilesMetaData[];
};

export const deleteFilesFromCloudinary = async(publicId: string) => {
    await cloudinary.uploader.destroy(publicId)
}