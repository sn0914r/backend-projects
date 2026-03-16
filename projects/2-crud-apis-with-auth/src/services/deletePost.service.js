const { db } = require("../config/firebase.config");
const verifyPost = require("./verifyPost.service");

const deletePost = async (id, uid) => {
  const post = await verifyPost(id, uid);
  await db.collection("project2").doc(id).delete();
  return post;
};

module.exports = deletePost;
