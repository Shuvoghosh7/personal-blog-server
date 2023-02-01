const { createBlogServices, getBlogService, updateBlogService, deleteBlogService } = require("../services/blog.service")


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

  exports.getBlogs=async (req, res, next) => {
    try {
      const blogs=await getBlogService();
      res.status(200).json({
        stauts: "success",
        massage: "successfully get data for all Blog",
        data: blogs
      })
    } catch (error) {
      res.status(400).json({
        stauts:"fail",
        message: "Data is not found",
        error : error.message
      })
    }
  }

  exports.updateBlog=async (req, res, next) => {
    const {id}=req.params;
    try {
      //create method
      const result =await updateBlogService(id,req.body);
      if(!result.modifiedCount){
        return res.status(400).json({
            stauts:"fail",
            error : "Could not find Blog with this id"
          })
      }
      res.status(200).json({
        stauts: "success",
        massage: "successfully update the Blogs",
      })
    } catch (error) {
      res.status(400).json({
        stauts:"fail",
        message: "Could not update Blog",
        error : error.message
      })
    }  
  }

  exports.deletBlog=async(req,res,next)=>{
    try {
      const {id}=req.params;
      const result=await deleteBlogService(id)
      if(!result.deletedCount){
        return res.status({
          stauts: "fail",
          error: "Could not delete the Blog",
        })
      }
      res.status(200).json({
        stauts: "success",
        massage: "Data Delete successfully",
      })
      
    } catch (error) {
      res.status(400).json({
        stauts:"fail",
        message: "Blog is not Delete",
        error : error.message
      })
    }

  }
  