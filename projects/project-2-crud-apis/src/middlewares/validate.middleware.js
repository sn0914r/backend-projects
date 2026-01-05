const AppError = require("../errors/AppError.error");

const validate =
  (schema, type = "body") =>
  (req, res, next) => {
    const { error } = schema.validate(req[type], {
      abortEarly: false,
    });

    if (error) {
      return next(new AppError(`${error.details.map((e) => e.message)}`, 400));
    }

    next();
  };

module.exports = validate;
