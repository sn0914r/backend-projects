const AppError = require("../utils/AppError");

const validate = (schema) => (req, res, next) => {
  console.log("validation", req.body);
  console.log("HI")
  const { error, value } = schema.validate(req.body);

  if (error) {
    console.log(error)
    throw new AppError(error, 400);
  }

  req.body = value;
  next();
};

module.exports = validate;
