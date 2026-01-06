const AppError = require("../errors/AppError");

const getRecord = async (recordId) => {
  try {
    const record = await db.collection("p5requests").doc(recordId).get();

    if (!record.exists) {
      throw new AppError("Record not found", 404);
    }
    return {
      id: record.id,
      ...record.data(),
    };
  } catch (error) {
    if (error instanceof AppError) {
      throw error;
    }

    throw new AppError(error.message, 500);
  }
};

module.exports = getRecord;
