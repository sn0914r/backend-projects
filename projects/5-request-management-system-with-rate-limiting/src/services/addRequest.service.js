const { db } = require("../configs/firebase.configs");

const addRequest = async (title, description, userId) => {
  const timestamp = new Date();

  const doc = await db.collection("project5").add({
    title,
    description,
    status: "pending",
    userId,
    createdAt: timestamp,
    updatedAt: timestamp,
  });

  const snapshot = await db.collection("project5").doc(doc.id).get();
  const docu = { id: snapshot.id, ...snapshot.data() };
  return docu;
};

module.exports = addRequest;
