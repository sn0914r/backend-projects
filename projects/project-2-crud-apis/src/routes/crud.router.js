const express = require("express");

const validate = require("../middlewares/validate.middleware");
const {
  PostSchemaForPUT,
  PostSchema,
  PostIdSchema,
} = require("../validation/post.schema");

const addPost = require("../controllers/add.controller");
const { readPosts, readPostById } = require("../controllers/read.controller");
const updatePost = require("../controllers/update.controller");
const deletePost = require("../controllers/delete.controller");

const { asyncErrorHandler } = require("../middlewares/error.middleware");
const verifyAuth = require("../middlewares/verify.middleware");

const router = express.Router();

router.post(
  "/posts",
  validate(PostSchema),
  verifyAuth,
  asyncErrorHandler(addPost)
);

router.get("/posts", verifyAuth, asyncErrorHandler(readPosts));
router.get(
  "/posts/:id",
  validate(PostIdSchema, "params"),
  verifyAuth,
  asyncErrorHandler(readPostById)
);

router.put(
  "/posts/:id",
  validate(PostIdSchema, "params"),
  validate(PostSchemaForPUT),
  asyncErrorHandler(updatePost)
);

router.delete(
  "/posts/:id",
  validate(PostIdSchema, "params"),
  asyncErrorHandler(deletePost)
);

module.exports = router;
