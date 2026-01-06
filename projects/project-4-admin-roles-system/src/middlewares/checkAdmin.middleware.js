const AppError = require("../errors/AppError");

const checkIsAdmin = async (req, res, next) => {
  if (req["decoded"]["role"] !== "admin") {
    return next(new AppError("Unauthorized", 403));
  }
  next();
};

module.exports = checkIsAdmin;
