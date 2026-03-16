const { db } = require("../configs/firebase.configs");

const getUsers = async () => {
  const snapshot = await db.collection("project4").get();
  const users = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return users;
};

module.exports = getUsers