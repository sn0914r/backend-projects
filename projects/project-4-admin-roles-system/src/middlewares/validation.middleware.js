const AppError = require("../errors/AppError");

const validate = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body, {
    abortEarly: false,
  });

  if (error) {
    return next(
      new AppError(`${error.details.map((err) => err.message)}`, 401)
    );
  }

  next();
};

module.exports = validate;
