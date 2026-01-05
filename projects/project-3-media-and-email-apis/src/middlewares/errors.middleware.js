const GlobalErrorHandler = (error, req, res, next) => {
  res.status(error.statusCode).json({
    success: false,
    error: error.message,
  });
};

const asyncErrorHandler = (fn) => async (req, res, next) => {
  try {
    await fn(req, res, next);
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  GlobalErrorHandler,
  asyncErrorHandler,
};
