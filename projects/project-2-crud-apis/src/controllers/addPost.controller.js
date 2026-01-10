const addPost = require("../services/addPost.service");

const addPostController = async (req, res) => {
  const { title, content } = req.body;
  const { uid } = req.user;
  const post = await addPost({ title, content, uid });
  res.status(200).json(post);
};

module.exports = addPostController;
