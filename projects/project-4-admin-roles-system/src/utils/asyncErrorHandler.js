const AppError = require("../errors/AppError");

const asyncErrorHandler = (fn) => async (req, res, next) => {
  try {
    await fn(req, res, next);
  } catch (error) {
    throw new AppError(error);
  }
};

module.exports = asyncErrorHandler;
