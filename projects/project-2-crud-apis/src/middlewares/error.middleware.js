const GlobalErrorHandler = (error, req, res, next) => {
  console.log(error.statusCode);
  res.status(error.statusCode).json({
    success: false,
    error: error.message || "Internal Server Error",
  });
};

const asyncErrorHandler = (fn) => async (req, res, next) => {
  try {
    await fn(req, res, next);
  } catch (error) {
    next(error);
  }
};

module.exports = { GlobalErrorHandler, asyncErrorHandler };
