const updatePost = require("../services/updatePost.service");

const updatePostController = async (req, res) => {
  const { id } = req.params;
  const { uid } = req.user;

  const post = await updatePost(id, uid, req.body);
  res.status(200).json(post);
};
module.exports = updatePostController;
