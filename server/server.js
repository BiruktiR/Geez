//this will be our starting point of our server application
// npm init -y ..it will initialize empty package .json
//then we will install all necessary dependices by-  npm install body-parser cors express mongoose nodemon
// dependencies that we need are body-parser --that enable us post request 
// cors --that enable us cross reg reuest 
// express-- as a framework for creating a routing of application
// mongoose --to create models for our post
//nodemon for -- so that we dont have to manually reset the server everytime  we make a change insted nodemon will do the rest
 

require("dotenv").config({ path: "./.env" });
const dotenv=require('dotenv');
const express = require("express");
const app = express();
const connectDB=require('./config/db');
const errorHandler= require('./middleware/error');
const cors=require('cors');
//connect Db
connectDB();

app.use(cors())
app.use(express.json())
// Connecting Routes piece of middleware 


app.get("/", (req, res, next) => {
  res.send("Api running");
});
app.use("/api/auth", require("./routes/auth"));
app.use("/api/private", require("./routes/private"));

//Error handler  should be last piece of middleware 
app.use(errorHandler);

//here we get a port 
const PORT = process.env.PORT || 5000

//here we run the server
 const server =app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
});
process.on("unhandledRejection", (err, promise) => {
  console.log(`Logged Error: ${err.message}`);
  server.close(() => process.exit(1));
});

