const Joi = require('joi');

const discussionSchema = Joi.object({
    title: Joi.string().max(150).required(),
    author : Joi.string().required(),
    content : Joi.string().default("")
});

module.exports = {discussionSchema};

