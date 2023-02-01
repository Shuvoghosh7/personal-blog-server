const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

//middleware
app.use(express.json());
app.use(cors());
//routes
const blogRoute=require('./routes/blog.route')



app.get("/", (req, res) => {
  res.send("Route is working!");
});

// route colling
app.use("/api/v1",blogRoute)



module.exports = app;
