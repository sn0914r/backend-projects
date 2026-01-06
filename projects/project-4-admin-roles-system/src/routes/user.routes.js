const express = require("express");
const verifyAuth = require("../middlewares/verifyAuth.middleware");
const getUserProfile = require("../controllers/getUserProfile.controller");
const createUser = require("../controllers/createUser.controller");

const validate = require("../middlewares/validation.middleware");
const { RegisterSchema } = require("../validations/validation.schemas");

const router = express.Router();

router.get("/profile", verifyAuth, getUserProfile);
router.post("/register", validate(RegisterSchema), createUser);

module.exports = router;
