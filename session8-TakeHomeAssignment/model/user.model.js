const mongoose = require("mongoose");
const validator = require("validator");
// creating a user schema with fullName, username, email

const userModel  = new mongoose.Schema({
    fullName:{
        type: String,
        default: "",
        maxLength: 50,
        minLength: 3
    },
    username:{
        type: String,
        required: true,
        unique: true,
        maxLength: 20,
        minLength: 3
    },
    email:{
        type: String,
        required: true,
        unique: true,
        validate : (data) => { return validator.isEmail(data) }
    }
});

module.exports = mongoose.model("User", userModel);