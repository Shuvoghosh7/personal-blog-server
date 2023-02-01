const { createBlogServices } = require("../services/blog.service")


exports.createBlog=async (req, res, next) => {
    try {
      //create method
      const result=await createBlogServices(req.body)
  
      res.status(200).json({
        stauts: "success",
        massage: "successfully create a Blogs",
        data: result
      })
    } catch (error) {
      res.status(400).json({
        stauts:"fail",
        message: "Data is not inserted",
        error : error.message
      })
    }  
  }