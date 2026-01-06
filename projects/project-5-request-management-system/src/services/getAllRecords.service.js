const { db } = require("../configs/firebase.configs");
const AppError = require("../errors/AppError");

const getAllRecords = async (uid = null) => {
  console.log(uid);
  try {
    const snapshot = uid
      ? await db.collection("p5requests").where("userId", "==", uid).get()
      : await db.collection("p5requests").get();

    console.log(snapshot.empty);
    const allRecords = snapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });

    console.log(allRecords);

    return allRecords;
  } catch (error) {
    throw new AppError(error.message, 500);
  }
};

module.exports = getAllRecords;
