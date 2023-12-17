const express=require('express');
const userModel = require('../Model/userModel');
const jwt = require('jsonwebtoken');
const blacklist = require('../blacklist');

const userRoute=express.Router()

userRoute.post('/register',async(req,res)=>{
    try {
        const user= await userModel(req.body)
        await user.save()
        res.send('user added ')
    } catch (error) {
        res.send(error)
    }
})


userRoute.post('/login',async(req,res)=>{
   const {email,password}=req.body;
    try {
        const user=await userModel.findOne({email,password})
        if(user){
            const token=jwt.sign({userID:user._id},"sajjak",{expiresIn:"7d"})

            const refreshToken=jwt.sign({email:email},"ali",{expiresIn:"15d"})
            res.send({msg:"Login success",token,refreshToken})
        }
    } catch (error) {
        console.log(error)
    }
})

userRoute.get('/logout',(req,res)=>{
    const token=req.headers.authorization
    console.log(token)
    if(!token){
      res.send('login first')
    }
    blacklist.push(token)
    res.send("user logged out")
})

userRoute.get("/refreshtoken",(req,res)=>{
    const refreshToken=req.headers.authorization
    jwt.verify(refreshToken,"ali",(err,decoded)=>{
        if(decoded){
            const token=jwt.sign({email:email},"ali",{
                expiresIn:"7d"
            })
            res.send(token)
        }else{
            res.send("Invalid token")
        }
    })
})


module.exports=userRoute;
