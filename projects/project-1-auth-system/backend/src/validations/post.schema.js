const joi = require("joi");

const PostSchema = joi.object({
  title: joi.string().min(3).required(),
  description: joi.string().optional(),
});

module.exports = PostSchema;
