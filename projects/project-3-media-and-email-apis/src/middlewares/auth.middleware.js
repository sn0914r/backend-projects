const { auth } = require("../config/firebase.config");
const AppError = require("../errors/AppError");

const verifyAuth = async (req, res, next) => {
  if (!req.headers?.authorization?.startsWith("Bearer ")) {
    throw new AppError("Token not found", 401);
  }

  const idToken = req.headers.authorization.split(" ")[1];
  const decodedToken = await auth.verifyIdToken(idToken);
  req.user = decodedToken;
  next();
};

module.exports = verifyAuth;
