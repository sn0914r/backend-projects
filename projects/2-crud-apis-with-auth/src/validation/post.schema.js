const joi = require("joi");

const postSchema = joi.object({
  title: joi.string().required().min(3),
  content: joi.string().optional().allow("", null),
});

const updatePostSchema = joi.object({
  title: joi.string().optional().min(3),
  content: joi.string().optional(),
});

module.exports = { postSchema, updatePostSchema };
