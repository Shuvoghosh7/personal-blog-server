const Blogs = require("../models/blogs");

exports.createBlogServices = async (data) => {
    const result = await Blogs.create(data)
    return result;
}

exports.getBlogService = async () => {
    const jobs = await Blogs.find({})
    return jobs;
}
exports.getBlogByIdService = async (id) => {
    const blog = await Blogs.findOne({_id:id})
    return blog;
}

exports.updateBlogService = async (id,data) => {
    const result = await Blogs.updateOne({_id:id},data,{
        runValidators:true
    })
    return result;
}

exports.deleteBlogService = async (id) => {
    const result = await Blogs.deleteOne({_id:id})
    return result;
}