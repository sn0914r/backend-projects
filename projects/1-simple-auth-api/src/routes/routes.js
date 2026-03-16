const express = require("express");

const verifyAuth = require("../middlewares/verifyAuth.middleware");
const getProtectedContentController = require("../controllers/getProtectedContent.controller");

const router = express.Router();

router.get("/protected", verifyAuth, getProtectedContentController);

module.exports = router;
