const AppError = require("../errors/AppError");
const addRecord = require("../services/addRecord.service");
const asyncErrorHandler = require("../utils/asyncErrorHandler");

const addRequest = asyncErrorHandler(async (req, res, next) => {
  const { title, description } = req.body;
  const { uid, role } = req.user;

  if (role === "admin") {
    return next(new AppError("Admin can't add request", 403));
  }

  try {
    const { refId, record } = await addRecord(title, description, uid);

    res.status(201).json({
      success: true,
      recordId: refId,
      data: record,
    });
  } catch (error) {
    if (error instanceof AppError) {
      return next(error);
    }

    return next(new AppError(error.message, 500));
  }
});

module.exports = addRequest;
