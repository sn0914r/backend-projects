const AppError = require("../errors/AppError");
const getAllRecords = require("../services/getAllRecords.service");
const asyncErrorHandler = require("../utils/asyncErrorHandler");

const getRequests = asyncErrorHandler(async (req, res, next) => {
  const { role, uid } = req["user"];

  console.log(role, uid);
  try {
    const records =
      role === "admin" ? await getAllRecords() : await getAllRecords(uid);

    res.status(200).json({
      success: true,
      data: records,
      size: records.length,
    });
  } catch (error) {
    if (error instanceof AppError) {
      return next(error);
    }

    next(new AppError(error.message, 500));
  }
});

module.exports = getRequests;
