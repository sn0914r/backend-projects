const AppError = require("../errors/AppError.error");

const validate = (schema) => (req, res, next) => {
  const { error, value } = schema.validate(req.body, {
    abortEarly: false,
  });

  if (error) {
    const errors = error.details.map((e) => e.message).toString();
    return next(new AppError(errors, 400));
  }
  req.body = value;
  next();
};

module.exports = validate;
