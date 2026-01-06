const rateLimit = require("express-rate-limit");
const AppError = require("../errors/AppError");

const userLimiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 10,
  keyGenerator: (req) => req.user.uid,
  handler: (req, res, next) => {
    next(new AppError("Too many requests", 429));
  },
});

module.exports = userLimiter;
