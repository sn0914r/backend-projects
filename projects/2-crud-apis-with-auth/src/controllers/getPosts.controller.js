const getPosts = require("../services/getPosts.service");

const getPostsController = async (req, res) => {
  const { uid } = req.user;
  const posts = await getPosts(uid);
  res.status(200).json(posts);
};

module.exports = getPostsController;
