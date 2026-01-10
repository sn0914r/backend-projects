const { db } = require("../configs/firebase.configs");

const patchRequest = async (id, status) => {
  await db.collection("project5").doc(id).update({
    status,
    updatedAt: new Date(),
  });

  const snapshot = await db.collection("project5").doc(id).get();
  const request = { id: snapshot.id, ...snapshot.data() };
  return request;
};

module.exports = patchRequest;
