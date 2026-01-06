const joi = require("joi");

const RequestSchema = joi.object({
  title: joi.string().required(),
  description: joi.string().required(),
  status: joi.any().strip().default("pending"),
});

const StatusSchema = joi.object({
  status: joi.string().valid("approved", "rejected").required(),
});

module.exports = { RequestSchema, StatusSchema };
