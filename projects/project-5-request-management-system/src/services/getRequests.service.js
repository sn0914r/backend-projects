const { db } = require("../configs/firebase.configs");

const getRequests = async (uid = null) => {
  const snapshot = uid
    ? await db.collection("project5").where("userId", "==", uid).get()
    : await db.collection("project5").get();

  const requests = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return requests;
};

module.exports = getRequests;
