const joi = require("joi");

const RegisterSchema = joi.object({
  name: joi.string().required(),
  email: joi.string().email().required(),
  password: joi.string().required().min(6),
});

module.exports = { RegisterSchema };
