const mongoose = require('mongoose');
const validator = require('validator');

// creating schema for the blog
const blogSchema = new mongoose.Schema({
    // getting error for isAlphanureic since it does not allow spaces
    // title : {type : String, required : true, trim: true, minlength : 5, maxlength : 100, validate: (data)=> {return validator.isAlphanumeric(data, 'en-US', { ignore: ' ' })}},
    title : {type :String, required : true, trim : true, minlength:5, maxlength:100},
    content : {type : String, required : true},
    author : {type : String, required : true}
})

// creating model for the blog
const BlogModel = mongoose.model('Blog', blogSchema);

module.exports = BlogModel;