const express=require('express');
const connectionData = require('./config/config.js');
const authRouter = require('./routers/authRouter.js');
const postRouter = require('./routers/postRouter.js');
const app=express()
const dotenv=require('dotenv').config()
const port=process.env.port || 8011;

// buit-in middleware
app.use(express.json());
app.use(express.urlencoded())


// router middleware
app.use("/api/auth",authRouter)
app.use("/api",postRouter)
app.listen(port,()=>{
    console.log(`server is runing the port http://localhost:${port}`)
})
connectionData()