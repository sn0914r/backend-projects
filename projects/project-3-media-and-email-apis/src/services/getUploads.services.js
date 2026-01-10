const { db } = require("../config/firebase.config");

const getUploads = async (uid) => {
  const snap = await db.collection("project3").where("uid", "==", uid).get();

  const docs = snap.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return docs;
};

module.exports = getUploads;
