const rateLimit = require("express-rate-limit");
const AppError = require("../errors/AppError");

const rateLimiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 10,
  keyGenerator: (req) => req.user.uid,
  handler: (req, res, next) => {
    throw new AppError("Too many requests, please try after a few mins", 429);
  },
});

module.exports = rateLimiter;
