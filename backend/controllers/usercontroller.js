import userModel from '../models/userModel.js'
import validator from "validator";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
const createtoken= (id) => { 
  return jwt.sign({id},process.env.JWT_SECRET)
 }
//Route for user login
const loginUser = async (req,res) =>{
  try {
    const {email,password}=req.body;
    const user=await userModel.findOne({email})
    if(!user){
      return res.json({success:false,message:"USER DOES NOT EXISTS"})
    }
    const isMatch=await bcrypt.compare(password,user.password)
    if(isMatch){
      const token=createtoken(user._id)
      res.json({success:true,token})

    }
    else{
      res.json({success:false,message:"INVALID CREDENTIALS"})
    }
  } catch (error) {
    console.log(error);
    res.json({success:false,message:error.message})
  }
}
//Route for user registreation
const registerUser = async(req,res)=>{
  try {
    const {name,email,password}=req.body
    //checking user already exists or not 
    const exists=await userModel.findOne({email})
    if(exists){
      return res.json({success:false,message:"USER ALREADY EXISTS"})
    }
    // validating email and strong password
    if(!validator.isEmail(email)){
      return res.json({success:false,message:"Please enter valid email"})
    }
    if(password.length < 8 ){
      return res.json({success:false,message:"Please enter a strong password"})
    }
    //hashing user password
    const salt= await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(password,salt)
    const newuser= new userModel({
      name,
      email,
      password:hashPassword
    })
    const user=await newuser.save()
    const token = createtoken(user._id)
    res.json({success:true,token})
  } catch (error) {
    console.log(error);
    res.json({success:false,message:error.message})
  }
}
// Route for Admin login
const adminLogin = async(req,res)=>{
   try {
    const {email,password}=req.body
    if(email===process.env.ADMIN_EMAIL && password===process.env.ADMIN_PASSWORD
    ){
      const token =jwt.sign(email+password,process.env.JWT_SECRET)
      res.json({success:true,token})
    }
    else{
      res.json({success:false,message:"Invalid credentials"})
    }
   } catch (error) {
    console.log(error);
    res.json({success:false,message:error.message})
   }
}
export {loginUser,registerUser,adminLogin}