const mongoose = require('mongoose');
const env = require("dotenv").config();
const DATABASE_URL = process.env.DATABASE_URL;

mongoose.connect(DATABASE_URL)
.then((res)=>console.log("Connection success"))
.catch((err)=>console.log(err));