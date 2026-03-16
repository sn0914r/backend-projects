const { auth } = require("../config/firebase.config");
const AppError = require("../errors/AppError.error");

const verifyAuth = async (req, res, next) => {
  if (!req.headers?.authorization?.startsWith("Bearer ")) {
    throw new AppError("No token found", 401);
  }

  const token = req.headers.authorization.split(" ")[1];
  const decodedToken = await auth.verifyIdToken(token);
  req.user = decodedToken;
  next();
};

module.exports = verifyAuth;
