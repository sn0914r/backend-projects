const AppError = require("../errors/AppError");

const checkIsAdmin = async (req, res, next) => {
  const role = req["user"]?.role;

  if (role !== "admin") {
    return next(new AppError("You are not an admin", 403));
  }
  next();
};

module.exports = checkIsAdmin;
