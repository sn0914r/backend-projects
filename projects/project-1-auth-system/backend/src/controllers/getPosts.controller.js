const { getPosts } = require("../db/MockDB");

const getAllPosts = (req, res) => {
  res.status(200).json({
    isSuccess: true,
    data: getPosts(),
  });
};

module.exports = getAllPosts;
