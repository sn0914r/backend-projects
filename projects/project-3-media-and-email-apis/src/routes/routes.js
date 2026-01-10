const express = require("express");
const verifyAuth = require("../middlewares/auth.middleware");
const getUploadsController = require("../controllers/getUploads.controller");
const { upload, requireFile } = require("../middlewares/upload.middleware");
const uploadFileController = require("../controllers/uploadFile.controller");
const router = express.Router();

router.get("/uploads", verifyAuth, getUploadsController);
router.post("/upload", verifyAuth, upload, requireFile, uploadFileController);

module.exports = router;
