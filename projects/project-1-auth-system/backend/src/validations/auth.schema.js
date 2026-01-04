const joi = require("joi");

const RegisterSchema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().required().min(6).alphanum(),
  confirmPassword: joi.ref("password"),
});

module.exports = RegisterSchema;
