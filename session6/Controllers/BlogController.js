const BlogModel = require('../Model/BlogModel');
const BlogService = require('../Services/BlogService');


async function createBlog(req, res) {
    const {title,content,author} = req.body;

    // will create object of BlogModel
    // const newBlog = new BlogModel({title,content,author});

    // save the blog to database
   try {
       const blog = await new BlogService(BlogModel).createBlog({title,content,author});
       res.status(201).json(blog);
   } catch (error) {
       res.status(400).json({error: error.message});
   }
}

module.exports = {createBlog};