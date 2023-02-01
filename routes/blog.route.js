const express = require("express");
const router=express.Router()

const blogController=require('../controller/blog.controller');

router.route('/blog')
.post(blogController.createBlog)
/* .get(productController.getProduct)
router.route('/product/:id')
.get(productController.getProductById) */

module.exports=router;