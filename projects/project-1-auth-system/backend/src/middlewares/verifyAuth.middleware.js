const { admin } = require("../config/firebase.config");
const AppError = require("../utils/AppError");
const { asyncErrorHandler } = require("./error.middleware");

const verifyAuth = asyncErrorHandler(async (req, res, next) => {
  if (!req.headers?.authorization?.startsWith("Bearer ")) {
    throw (new Error("Authorization token missing").status = 401);
  }

  const idToken = req.headers.authorization.split(" ")[1];

  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    req["user"] = decodedToken;
    next();
  } catch (error) {
    throw new AppError(error);
  }
});

module.exports = verifyAuth;
