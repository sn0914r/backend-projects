const { db } = require("../config/firebase.config");
const AppError = require("../errors/AppError");

const saveRecord = async (details) => {
  try {
    const ref = await db.collection("uploads-records").add(details);
    const id = ref.id;
    return id;
  } catch (error) {
    throw new AppError(error, 500);
  }
};

module.exports = saveRecord;
