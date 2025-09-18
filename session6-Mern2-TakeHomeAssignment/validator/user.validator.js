const joi = require("joi");

const userSchema = joi.object({
    fullName: joi.string().min(3).max(50).default("").optional(),
    username: joi.string().min(3).max(25).required(),
    email: joi.string().email().required()
});

function validateUser(data) {
    return userSchema.validate(data);
}

module.exports = { userSchema, validateUser };