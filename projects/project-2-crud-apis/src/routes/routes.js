const express = require("express");

const { postSchema, updatePostSchema } = require("../validation/post.schema");

const validate = require("../middlewares/validate.middleware");
const verifyAuth = require("../middlewares/verify.middleware");

const addPostController = require("../controllers/addPost.controller");
const getPostController = require("../controllers/getPost.controller");
const getPostsController = require("../controllers/getPosts.controller");
const updatePostController = require("../controllers/updatePost.controller");
const deletePostController = require("../controllers/deletePost.controller");

const router = express.Router();

router.post("/posts", verifyAuth, validate(postSchema), addPostController);

router.get("/posts/:id", verifyAuth, getPostController);
router.get("/posts", verifyAuth, getPostsController);

router.patch(
  "/posts/:id",
  verifyAuth,
  validate(updatePostSchema),
  updatePostController
);

router.delete("/posts/:id", verifyAuth, deletePostController);

module.exports = router;
