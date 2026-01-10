const express = require("express");

const { verifyAuth, requireAdmin } = require("../middlewares/auth.middleware");

const setAdminController = require("../controllers/setAdmin.controller");
const getUsersControllers = require("../controllers/getUsers.controller");

const router = express.Router();

router.post("/make-admin/:id", verifyAuth, requireAdmin, setAdminController);

router.get("/users", verifyAuth, requireAdmin, getUsersControllers);

module.exports = router;
