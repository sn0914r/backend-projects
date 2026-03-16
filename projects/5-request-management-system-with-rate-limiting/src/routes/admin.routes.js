const express = require("express");
const { verifyAuth, requireAdmin } = require("../middlewares/auth.middleware");
const {
  getRequestsForAdminController,
} = require("../controllers/getRequests.controller");
const validate = require("../middlewares/validate.middleware");
const { StatusSchema } = require("../validations/validation.schema");
const patchRequestController = require("../controllers/patchRequest.controller");

const router = express.Router();

router.get(
  "/requests",
  verifyAuth,
  requireAdmin,
  getRequestsForAdminController
);
router.patch(
  "/requests/:id",
  verifyAuth,
  requireAdmin,
  validate(StatusSchema),
  patchRequestController
);

module.exports = router;
