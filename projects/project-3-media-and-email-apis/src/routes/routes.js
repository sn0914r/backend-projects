const express = require("express");
const verifyAuth = require("../middlewares/verifyAuth.middleware");
const upload = require("../middlewares/upload.middleware");
const getUploads = require("../controllers/getUploads.controller");
const uploadController = require("../controllers/upload.controller");
const router = express.Router();

router.get("/uploads", verifyAuth, getUploads);
router.post("/upload", verifyAuth, upload.single("file"), uploadController);

module.exports = router;
