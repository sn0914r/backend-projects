const joi = require("joi");

const PostSchema = joi.object({
  title: joi.string().required().min(3),
  content: joi.string().optional().allow("", null),
});

const PostSchemaForPUT = joi.object({
  title: joi.string().optional().min(3),
  content: joi.string().optional(),
});

const PostIdSchema = joi.object({
  id: joi.string().min(10).max(40).regex(/^[a-zA-Z0-9_-]+$/).trim()
})

module.exports = { PostSchema, PostSchemaForPUT, PostIdSchema };
