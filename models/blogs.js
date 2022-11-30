const mongoose = require("mongoose");
const validator = require('validator');

const blogSchema = new mongoose.Schema({
    imageUrl: [{
        type: String,
        required: true,
        validate: [validator.isURL , "Plese Provide valid URL"]
    }],
    
    blogTitle:{
        type:String,
        trim:true,
        require:true,
        lowercase:true
    },
    blogDate:{
        type:String,
        require:true,
    },
    blogDescription:{
        type:String,
        require:true,
    }
}, {
    timestamps: true
});


// create model

const Blogs = new mongoose.model("Blogs",blogSchema);

module.exports = Blogs;

