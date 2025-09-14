const mongoose = require('mongoose');

// creating schema for the blog
const blogSchema = new mongoose.Schema({
    title : {type : String, required : true},
    content : {type : String, required : true},
    author : {type : String, required : true},
    createdAt : {type : Date, default : Date.now}
})

// creating model for the blog
const BlogModel = mongoose.model('Blog', blogSchema);

module.exports = BlogModel;