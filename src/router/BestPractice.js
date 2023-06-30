const { PostBestPractice, getData} = require("../controller/BestPractice");
const express = require("express");

const Router = new express.Router();

Router
.route("/")
.post(PostBestPractice)
.get(getData)

module.exports = Router;