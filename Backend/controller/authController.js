const authData = require("../models/authSchema.js");
const bcrypt = require("bcryptjs");
const jsonToken = require("jsonwebtoken");

const registerController = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    if (!name || !email || !password || !role) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    // email validation
    const emailValidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailValidation.test(email)) {
      return res.status(400).json({
        message: "Invalid email format",
      });
    }

    // password validation
    const passwordValidation =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!passwordValidation.test(password)) {
      return res.status(400).json({
        message:
          "Password must contain 8 characters, 1 uppercase, 1 lowercase, 1 number, and 1 special character",
      });
    }

    // check existing user
    const user = await authData.findOne({ email });

    if (user) {
      return res.status(409).json({
        message: `User already exists with email: ${email}`,
      });
    }

    // hash password
    const passwordHashing = await bcrypt.hash(password, 10);

    // create user
    const insertUser = await authData.create({
      name,
      email,
      password: passwordHashing,
      role,
    });

    res.status(201).json({
      message: "Registered successfully",
      details: {
        name: insertUser.name,
        email: insertUser.email,
        role: insertUser.role,
      },
    });
  } catch (error) {
    console.log("error in register:", error);

    res.status(500).json({
      message: "Something went wrong",
      err_message: error.message,
    });
  }
};

const loginConteroller = async(req,res) => {
  try {
    const {email,password}=req.body;
    
    if ( !email || !password ) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    // email validation
    const emailValidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailValidation.test(email)) {
      return res.status(400).json({
        message: "Invalid email format",
      });
    }

    const found=await authData.findOne({email})
    if(!found){
         return res.status(400).json({
        message: "user not found",
      });
    }
    const passwordComp=await bcrypt.compare(password,found.password)
    if(!passwordComp){
         return res.status(400).json({
        message: "Invalid email/password",
      });
    }
    const payload={
        id:found._id,
        name:found.namae,
        email:found.email,
        role:found.role
    }
    const token=jsonToken.sign(payload,process.env.JWT_TOKEN,{expiresIn:"1d"})
    res.status(200).json({message:"login sucessfully",details:{email:found.email},token:token})
  

  } catch (error) {
    console.log("error in login:", error);

    res.status(500).json({
      message: "Something went wrong",
      err_message: error.message,
    });
  }
};

module.exports = { loginConteroller, registerController };
