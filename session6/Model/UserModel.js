const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true, lowercase: true, validate: (data) => {return validator.isEmail(data)} },
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
})

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;