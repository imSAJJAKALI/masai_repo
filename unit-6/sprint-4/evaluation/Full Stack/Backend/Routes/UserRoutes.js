const express= require('express')
const UserModel=require('../Model/UserModel')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')

require('dotenv').config()

const UserRouter=express.Router()

UserRouter.post('/register',async(req,res)=>{
    try {
        const {name,email,gender,password}=req.body;
        const userExist=await UserModel.findOne({email})
        if(!userExist){
            const passwordHash=await bcrypt.hash(password,8);
            const newUser=  new UserModel({...req.body,password:passwordHash})
            await newUser.save()

            res.status(200).json({data:newUser,msg:"New User added successfully..."})
        }else{
            res.status(400).json({msg:"User already register"})
        }
    } catch (error) {
        res.status(500).json({msg:error})
    }
})

UserRouter.post('/login',async(req,res)=>{
    try {
        const {email,password}=req.body;
        const userExist= await UserModel.findOne({email})
        if(userExist){
            var token=jwt.sign({userID:userExist._id},process.env.SECRET_KEY)
            res.status(200).json({msg:"User Logged in Successfull",token})
        }else{
            res.status(200).json({msg:"Incorrect Password"})
        }
    } catch (error) {
        res.status(400).json({error:error.message})
    }
})

module.exports=UserRouter;
