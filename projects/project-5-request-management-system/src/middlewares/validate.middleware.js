const AppError = require("../errors/AppError");

const validate = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body, {
    abortEarly: false,
  });

  if (error) {
    return next(new AppError(`${error.details.map((e) => e.message)}`, 400));
  }

  next();
};

module.exports = validate;
