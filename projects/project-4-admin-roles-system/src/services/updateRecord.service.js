const { db } = require("../configs/firebase.configs");
const AppError = require("../errors/AppError");

const updateRecord = async (uid, data) => {
  try {
    await db.collection("p4Users").doc(uid).update(data);
  } catch (error) {
    throw new AppError(error, 500);
  }
};

module.exports = updateRecord;
