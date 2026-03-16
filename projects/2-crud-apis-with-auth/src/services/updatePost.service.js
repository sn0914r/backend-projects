const { db } = require("../config/firebase.config");
const getPost = require("./getPost.service");
const verifyPost = require("./verifyPost.service");

const updatePost = async (id, uid, updates) => {
  await verifyPost(id, uid);

  const updatedAt = new Date();

  await db
    .collection("project2")
    .doc(id)
    .update({
      ...updates,
      updatedAt,
    });

  const post = await getPost(id, uid);
  return post;
};

module.exports = updatePost;
