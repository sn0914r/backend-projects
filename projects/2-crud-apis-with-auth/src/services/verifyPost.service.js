const { db } = require("../config/firebase.config");
const AppError = require("../errors/AppError.error");

/**
 * Verifies if the post belongs to the user and throws an error if it doesn't
 */
const verifyPost = async (id, uid) => {
  const snap = await db.collection("project2").doc(id).get();

  if (!snap.exists) {
    throw new AppError("Post not found", 404);
  }
  const post = {
    id: snap.id,
    ...snap.data(),
  };

  if (post.uid !== uid) {
    throw new AppError("Unauthorized", 403);
  }

  return post;
};

module.exports = verifyPost;
