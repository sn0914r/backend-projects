const { auth } = require("../config/firebase.config");
const AppError = require("../errors/AppError.error");
const { asyncErrorHandler } = require("./error.middleware");

const verifyAuth = asyncErrorHandler(async (req, res, next) => {
  if (!req.headers?.authorization?.startsWith("Bearer ")) {
    return next(new AppError("No token found", 401));
  }

  const token = req.headers.authorization.split(" ")[1];

  try {
    const decodedToken = await auth.verifyIdToken(token);
    req.body["userId"] = decodedToken.uid;
    return next();
  } catch (error) {
    return next(new AppError(error));
  }
});

module.exports = verifyAuth;
