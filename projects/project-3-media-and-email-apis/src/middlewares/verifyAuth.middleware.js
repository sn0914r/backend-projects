const { auth } = require("../config/firebase.config");
const AppError = require("../errors/AppError");
const { asyncErrorHandler } = require("./errors.middleware");

const verifyAuth = asyncErrorHandler(async (req, res, next) => {
  if (!req.headers?.authorization?.startsWith("Bearer ")) {
    return next(new AppError("Token not found", 401));
  }

  console.log("i")
  const idToken = req.headers.authorization.split(" ")[1];

  try {
    const decodedToken = await auth.verifyIdToken(idToken);
    req["userDetails"] = {
      uid: decodedToken.uid,
      email: decodedToken.email,
    };
  } catch (error) {
    return next(new AppError(error, 403));
  }
  next();
});

module.exports = verifyAuth;
