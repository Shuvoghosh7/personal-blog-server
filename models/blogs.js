const mongoose = require("mongoose");
const validator = require('validator');

const blogSchema = new mongoose.Schema({
    imageUrl: {
        type: String,
        validate: [validator.isURL, "Please provide a valid URL"]
    }, 
    blogTitle:{
        type:String,
        trim:true,
        require:true,
        lowercase:true
    },
    blogCategory:{
        type:String,
        require:true,
        lowercase:true
    },
    blogDescription:{
        type:String,
        require:true,
    },
    blogDate:{
        type:String,
        require:true,
    },

}, {
    timestamps: true
});


// create model

const Blogs = new mongoose.model("Blogs",blogSchema);

module.exports = Blogs;
