const verifyPost = require("./verifyPost.service");

const getPost = async (id, uid) => {
  const post = await verifyPost(id, uid);
  return post;
};

module.exports = getPost;
