const { auth } = require("../configs/firebase.configs");
const AppError = require("../errors/AppError");

const verifyAuth = async (req, res, next) => {
  if (!req.headers?.authorization?.startsWith("Bearer ")) {
    throw new AppError("No Token Found", 401);
  }

  const idToken = req.headers.authorization.split(" ")[1];
  const decodedToken = await auth.verifyIdToken(idToken);
  req.user = decodedToken;
  next();
};

const requireAdmin = async (req, res, next) => {
  if (req.user.role !== "admin") {
    throw new AppError("You are not an admin", 403);
  }
  next();
};

module.exports = { verifyAuth, requireAdmin };
