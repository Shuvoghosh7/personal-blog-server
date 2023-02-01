const express = require("express");
const router=express.Router()

const blogController=require('../controller/blog.controller');

router.route('/blog')
.post(blogController.createBlog)
.get(blogController.getBlogs)
router.route('/blog/:id')
.patch(blogController.updateBlog)
.delete(blogController.deletBlog)

module.exports=router;