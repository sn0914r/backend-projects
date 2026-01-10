const { auth } = require("../configs/firebase.configs");
const AppError = require("../errors/AppError");

const verifyAuth = async (req, res, next) => {
  if (!req.headers?.authorization?.startsWith("Bearer ")) {
    throw new AppError("Token is missing", 401);
  }

  const token = req.headers.authorization.split(" ")[1];
  const decodedToken = await auth.verifyIdToken(token);
  req["user"] = decodedToken;

  next();
};

const requireAdmin = (req, res, next) => {
  const role = req.user.role;
  if (role !== "admin") {
    throw new AppError("You are not an admin", 403);
  }
  next();
};

const requireUser = (req, res, next) => {
  const role = req.user.role;
  if (role === "admin") {
    throw new AppError("You are not a user", 403);
  }
  next();
};

module.exports = { verifyAuth, requireAdmin, requireUser };
