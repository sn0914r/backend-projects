const path = require("path");
const multer = require("multer");
const multerConfigs = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, `${path.join(__dirname, "../", "uploads")}`);
  },

  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

module.exports = multerConfigs;
