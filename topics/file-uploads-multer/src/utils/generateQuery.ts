import type { UploadedFilesMetaData } from "../providers/cloudinary.provider";

export const generateQuery = (uploadedFiles: UploadedFilesMetaData[]) => {
  const placeholders = [];
  const values = [];

  for (let i = 0; i < uploadedFiles.length; i++) {
    const pNum = 5 * (i + 1) - 4;
    const placeholder = `($${pNum}, $${pNum + 1}, $${pNum + 2}, $${pNum + 3}, $${pNum + 4})`;
    const value = Object.values(uploadedFiles[i]);

    placeholders.push(placeholder);
    values.push(...value);
  }

  const query = `
  INSERT INTO uploads (file_name, file_size, file_mime_type, url, public_id)
  VALUES ${placeholders}
  RETURNING *;
  `;

  return {
    query,
    values,
  };
};
