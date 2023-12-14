const express=require("express")
const app=express()
const dotenv=require("dotenv")
const dbconnect=require("./config/connection")
const morgan=require("morgan")
const cors = require('cors');
// const adminRouter=require('./routes/admin')
const formRouter=require('./routes/form')
 
dotenv.config()
dbconnect.dbconnect();
app.use(cors({
    credentials: true,
    origin: process.env.origin
  }));
app.use(morgan("dev"))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/",formRouter)
app.listen(process.env.PORT, () => {
    console.log("Server started listening to port");
  });
  