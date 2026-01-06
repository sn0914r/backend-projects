const { db } = require("../configs/firebase.configs");
const AppError = require("../errors/AppError");
const asyncErrorHandler = require("../utils/asyncErrorHandler");

const getUsersAdmin = asyncErrorHandler(async (req, res, next) => {
  try {
    const snapshot = await db.collection("p4Users").get();

    const userRecords = snapshot.docs.map((doc) => ({
      ...doc.data(),
    }));

    res.status(200).json({
      success: true,
      message: "All user's records are fetched",
      data: userRecords,
    });
  } catch (error) {
    next(new AppError(error, 500));
  }
});

module.exports = getUsersAdmin;
