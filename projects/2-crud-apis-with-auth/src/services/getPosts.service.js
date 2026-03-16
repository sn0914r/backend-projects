const { db } = require("../config/firebase.config");

const getPosts = async (uid) => {
  const snap = await db.collection("project2").where("uid", "==", uid).get();
  return snap.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};

module.exports = getPosts;
