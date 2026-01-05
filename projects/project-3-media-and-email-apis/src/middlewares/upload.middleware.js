const multer = require("multer");
const multerConfigs = require("../config/multer.config");

const upload = multer({ storage: multerConfigs });
module.exports = upload;
