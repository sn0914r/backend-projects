const { auth } = require("../configs/firebase.configs");
const AppError = require("../errors/AppError");
const asyncErrorHandler = require("../utils/asyncErrorHandler");

const verifyAuth = asyncErrorHandler(async (req, res, next) => {
  if (!req.headers?.authorization?.startsWith("Bearer ")) {
    return next(new AppError("Token is missing", 401));
  }

  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = await auth.verifyIdToken(token);
    req["user"] = decodedToken;
  } catch (error) {
    return next(new AppError(error.message, 401));
  }
  next();
});

module.exports = verifyAuth;
