const { db } = require("../configs/firebase.configs");
const AppError = require("../errors/AppError");

const patchRecord = async (recordId, status) => {
  try {
    await db.collection("p5requests").doc(recordId).update({
      status,
      updatedAt: new Date(),
    });
    const updatedRecord = await db.collection("p5requests").doc(recordId).get();
    return {
      id: updatedRecord.id,
      ...updatedRecord.data(),
    };
  } catch (error) {
    throw new AppError(error.message, 500);
  }
};

module.exports = patchRecord;
