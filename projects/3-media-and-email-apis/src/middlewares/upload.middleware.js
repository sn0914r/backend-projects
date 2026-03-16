const multer = require("multer");
const path = require("path");
const AppError = require("../errors/AppError");

const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, `${path.join(__dirname, "../", "uploads")}`);
    },

    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
  }),
}).single("file");

const requireFile = (req, res, next) => {
  if (!req.file) {
    throw new AppError("File not found", 400);
  }
  next();
};
module.exports = { upload, requireFile };
