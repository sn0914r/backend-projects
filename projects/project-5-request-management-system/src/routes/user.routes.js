const express = require("express");

// MIDDLEWARES
const verifyAuth = require("../middlewares/verifyAuth.middleware");
const validate = require("../middlewares/validate.middleware");
const userLimiter = require("../middlewares/userLimiter.middleware");

// CONTROLLERS
const addRequest = require("../controllers/addRequest.controller");
const getRequests = require("../controllers/getRequests.controller");

// SCHEMAS
const { RequestSchema } = require("../validations/validation.schema");

const router = express.Router();

router.post(
  "/requests",
  verifyAuth,
  userLimiter,
  validate(RequestSchema),
  addRequest
);
router.get("/requests", verifyAuth, getRequests);

/**
 * verifyAuth [x]
 * userLimiter [x]
 * validate [x]
 * addRequest [x]
 * getRequests [x]
 */

module.exports = router;
