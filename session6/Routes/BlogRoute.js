const express = require('express');
const router = express.Router();
const { createBlog } = require('../Controllers/BlogController');


// Route to get all blogs
// router.get('/', getAllBlogs);   
// Route to create a new blog
router.post('/createBlog', createBlog);

module.exports = router;