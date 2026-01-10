const { db } = require("../config/firebase.config");
const getPost = require("./getPost.service");

const addPost = async ({ title, content, uid }) => {
  const timestamp = new Date();

  const ref = await db.collection("project2").add({
    uid,
    title,
    content,
    createdAt: timestamp,
    updatedAt: timestamp,
  });

  const post = await getPost(ref.id, uid);
  return post;
};

module.exports = addPost;
