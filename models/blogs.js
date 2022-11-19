const mongoose = require("mongoose");

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
        
    }
});


// create model

const Blogs = new mongoose.model("Blogs",blogSchema);

module.exports = Blogs;

