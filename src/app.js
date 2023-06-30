const express = require('express');
const env = require("dotenv").config();
const PORT = process.env.PORT;
require("./DB/conection")
const Router = require("./router/BestPractice")

const app = express();
app.use(express.json())
app.use("/bestpractice",Router)

app.listen(PORT , ()=>{
    console.log(`listening port ${PORT}`)
})