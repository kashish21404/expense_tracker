const jwt=require('jsonwebtoken');
const User=require("../models/User");

const generateToken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET,{expiresIn:"1h"});
}

//register User
exports.registerUser=async(req,res)=>{
    
};

//Login user
exports.loginUser=async(req,res)=>{}

//Register User
exports.getUserInfo=async(req,res)=>{}