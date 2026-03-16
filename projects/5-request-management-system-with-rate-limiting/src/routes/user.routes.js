const express = require("express");

const { RequestSchema } = require("../validations/validation.schema");

const validate = require("../middlewares/validate.middleware");
const rateLimiter = require("../middlewares/rateLimiter.middleware");
const { verifyAuth, requireUser } = require("../middlewares/auth.middleware");

const addRequestController = require("../controllers/addRequest.controller");
const {
  getRequestsForUserController,
} = require("../controllers/getRequests.controller");

const router = express.Router();

router.post(
  "/requests",
  verifyAuth,
  requireUser,
  rateLimiter,
  validate(RequestSchema),
  addRequestController
);
router.get("/requests", verifyAuth, requireUser, getRequestsForUserController);

module.exports = router;
