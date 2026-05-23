import { pool } from "../clients/postgres.client";
import { AppError } from "../errors/AppError";
import {
  deleteFilesFromCloudinary,
  uploadFilesInCloudinary,
} from "../providers/cloudinary.provider";
import { generateQuery } from "../utils/generateQuery";

export const uploadFiles = async (files: Express.Multer.File[]) => {
  const uploadedFiles = await uploadFilesInCloudinary(files);

  const { query, values } = generateQuery(uploadedFiles);
  const result = await pool.query(query, values);

  return result.rows;
};

export const getFiles = async () => {
  const files = await pool.query(`SELECT * FROM uploads;`);
  return files.rows;
};

export const getFile = async (id: string) => {
  const fileId = Number(id);
  if (!Number.isInteger(fileId) || fileId <= 0)
    throw new AppError("Invalid Field Id", 400, "BAD_REQUEST_ERROR");

  const file = await pool.query(`SELECT * FROM uploads WHERE id = $1`, [
    fileId,
  ]);

  if (file.rowCount === 0)
    throw new AppError("File not found", 404, "NOT_FOUND_ERROR");

  return file.rows[0];
};

export const deleteFile = async (id: string) => {
  const fileId = Number(id);
  if (!Number.isInteger(fileId) || fileId <= 0)
    throw new AppError("Invalid Field Id", 400, "BAD_REQUEST_ERROR");

  const file = await pool.query(`SELECT public_id FROM uploads WHERE id = $1`, [
    fileId,
  ]);

  if (file.rowCount === 0)
    throw new AppError("File not found", 404, "FILE_NOT_FOUND_ERROR");

  const publicId = file.rows[0].public_id;

  await deleteFilesFromCloudinary(publicId);
  await pool.query(`DELETE FROM uploads WHERE id = $1`, [fileId]);
};
