const { db } = require("../configs/firebase.configs");
const AppError = require("../errors/AppError");

const addRecord = async (title, description, userId) => {
  let record = {
    title,
    description,
    status: "pending",
    userId,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  try {
    const requestRef = await db.collection("p5requests").add(record);

    return {
      refId: requestRef.id,
      record,
    };
  } catch (error) {
    throw new AppError(error.message, 500);
  }
};

module.exports = addRecord;
