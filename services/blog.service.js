const Blogs = require("../models/blogs");

exports.createBlogServices = async (data) => {
    const result = await Blogs.create(data)
    return result;
}