const express = require("express");
const verifyAuth = require("../middlewares/verifyAuth.middleware");
const checkIsAdmin = require("../middlewares/checkIsAdmin.middleware");
const getRequests = require("../controllers/getRequests.controller");
const patchRequest = require("../controllers/patchRequest.controller");
const validate = require("../middlewares/validate.middleware");
const { StatusSchema } = require("../validations/validation.schema");
const router = express.Router();

router.get("/requests", verifyAuth, checkIsAdmin, getRequests);
router.patch(
  "/requests/:id",
  verifyAuth,
  checkIsAdmin,
  validate(StatusSchema),
  patchRequest
);

/**
 * verifyAuth [x]
 * checkIsAdmin [x]
 * validate [x]
 * getRequests [x]
 * patchRequest [x]
 */

module.exports = router;
