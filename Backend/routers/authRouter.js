const express=require('express');
const { registerController, loginConteroller } = require('../controller/authController');
const authRouter=express.Router()

// register
authRouter.post("/register",registerController)
// login
authRouter.post("/login",loginConteroller)

module.exports=authRouter;