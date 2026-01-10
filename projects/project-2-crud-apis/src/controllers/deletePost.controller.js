const deletePost = require("../services/deletePost.service");

const deletePostController = async (req, res) => {
  const { id } = req.params;
  const { uid } = req.user;
  const deletedPost = await deletePost(id, uid);
  res.status(200).json(deletedPost);
};

module.exports = deletePostController;
