const getPost = require("../services/getPost.service");

const getPostController = async (req, res) => {
  const { id } = req.params;
  const { uid } = req.user;
  const post = await getPost(id, uid);
  res.status(200).json(post);
};

module.exports = getPostController;
