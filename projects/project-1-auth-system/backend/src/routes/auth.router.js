const express = require("express");

const verifyAuth = require("../middlewares/verifyAuth.middleware");
const validate = require("../middlewares/validate.middleware");

const register = require("../controllers/register.controller");
const getAllPosts = require("../controllers/getPosts.controller");

const RegisterSchema = require("../validations/auth.schema");

const router = express.Router();

router.post("/create-user", validate(RegisterSchema), register);
router.get("/protected-posts", verifyAuth, getAllPosts);
module.exports = router;
