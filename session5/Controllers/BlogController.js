const BlogModel = require('../Model/BlogModel');

async function createBlog(req, res) {
    const {title,content,author} = req.body;

    // will create object of BlogModel
    const newBlog = new BlogModel({title,content,author});

    // save the blog to database
   try {
       await newBlog.save();
       res.status(201).json(newBlog);
   } catch (error) {
       res.status(400).json({error: error.message});
   }
}

module.exports = {createBlog};