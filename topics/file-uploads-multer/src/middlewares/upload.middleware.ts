import multer from "multer";
import { AppError } from "../errors/AppError";

const storage = multer.memoryStorage();

const fileFilter: multer.Options["fileFilter"] = (req, file, cb) => {
  const allowedMimeTypes = ["image/jpeg", "image/png", "image/webp"];
  if (allowedMimeTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(
      new AppError(
        `Unsupported file type: ${file.mimetype}`,
        400,
        "UNSUPPORTED_FILE_TYPE",
      ),
    );
  }
};

export const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 10 * 1024 * 1024,
  },
}).array("files", 10);
