const joi = require("joi");

const RegisterSchema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().required().min(6),
});

const UIDSchema = joi.object({
  uid: joi.string().required(),
});

module.exports = { RegisterSchema, UIDSchema };
