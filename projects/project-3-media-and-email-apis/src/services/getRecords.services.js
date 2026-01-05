const { db } = require("../config/firebase.config");
const AppError = require("../errors/AppError");

const getRecords = async (userId) => {
  try {
    const snap = await db
      .collection("uploads-records")
      .where("userId", "==", userId)
      .get();

    const docs = snap.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    return docs;
  } catch (error) {
    throw new AppError(error, 500);
  }
};

module.exports = getRecords;
