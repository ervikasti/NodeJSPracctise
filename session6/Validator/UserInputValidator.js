const Joi = require('joi');

const userSchema = Joi.object({
    username: Joi.string().alphanum().min(3).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required()
});

function validateUser(data) {
    return userSchema.validate(data);
}

module.exports = { userSchema, validateUser };