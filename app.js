const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const path = require('path')

//middleware
app.use(express.json());
app.use(cors());

//routes
const blogsRoute=require('./routes/blog.route')

app.get("/", (req, res) => {
    res.send("Route is working! YaY!");
  });

// route colling
app.use("/api/v1",express.static("./images/"),blogsRoute)

module.exports = app;