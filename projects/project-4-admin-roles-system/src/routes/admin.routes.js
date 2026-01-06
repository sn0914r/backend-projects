const express = require("express");
const verifyAuth = require("../middlewares/verifyAuth.middleware");
const checkIsAdmin = require("../middlewares/checkAdmin.middleware");
const makeAdmin = require("../controllers/makeAdmin.controller");
const getUsersAdmin = require("../controllers/getUsersAdmin.controller");
const validate = require("../middlewares/validation.middleware");
const { UIDSchema } = require("../validations/validation.schemas");

const router = express.Router();

router.post(
  "/make-admin",
  validate(UIDSchema),
  verifyAuth,
  checkIsAdmin,
  makeAdmin
);
router.get("/users", verifyAuth, checkIsAdmin, getUsersAdmin);

module.exports = router;
