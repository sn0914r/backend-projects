const express = require("express");

const { verifyAuth } = require("../middlewares/auth.middleware");

const getUserProfileController = require("../controllers/getUserProfile.controller");
const createUserController = require("../controllers/createUser.controller");
const validate = require("../middlewares/validation.middleware");
const { RegisterSchema } = require("../validations/validation.schemas");

const router = express.Router();

router.get("/profile", verifyAuth, getUserProfileController);
router.post("/create-user", validate(RegisterSchema), createUserController);

module.exports = router;
