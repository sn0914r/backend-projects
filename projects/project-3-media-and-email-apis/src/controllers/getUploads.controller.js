const AppError = require("../errors/AppError");
const { asyncErrorHandler } = require("../middlewares/errors.middleware");
const getRecords = require("../services/getRecords.services");

const getUploads = asyncErrorHandler(async (req, res, next) => {
  const userId = req.userDetails.uid;
  console.log(userId)
  try {
    const meta = await getRecords(userId);
    res.status(200).json({
      success: true,
      data: meta,
    });
  } catch (error) {
    next(new AppError(error, 500));
  }
});

module.exports = getUploads;
