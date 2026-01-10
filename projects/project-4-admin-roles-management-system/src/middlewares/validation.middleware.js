const AppError = require("../errors/AppError");

const validate = (schema) => (req, res, next) => {
  const { error, value } = schema.validate(req.body, {
    abortEarly: false,
  });

  if (error) {
    const errors = error.details.map((e) => e.message).toString();
    throw new AppError(errors, 401);
  }

  req.body = value;
  next();
};

module.exports = validate;
