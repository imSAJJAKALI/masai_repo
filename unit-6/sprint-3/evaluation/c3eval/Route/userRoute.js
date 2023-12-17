const express=require('express');
const userModel = require('../Model/userModel');
const jwt = require('jsonwebtoken');
const blacklist = require('../blacklist');
const bcrypt= require('bcrypt')

const userRoute=express.Router()


userRoute.post('/register',async(req,res)=>{
    const {name,email,pass,city,age}=req.body
    try {
       const userExist=await userModel.findOne({email})
       if(userExist){
        res.send('user already sign in .')
       }
      const hash = bcrypt.hashSync(pass,8)
      const user=new userModel({name,email,pass:hash,city,age})
      await user.save()
      res.send(user)
    } catch (error) {
        res.send(error)
    }
})


userRoute.post('/login',async(req,res)=>{
   const {email,pass}=req.body;


   try {
    const user=await userModel.find({email})
    if(user.length>0 ){
        if(email.length>=8){
        bcrypt.compare(pass,user[0].pass,(err,result)=>{
            if(result){
                const token=jwt.sign({UserID:user[0]._id},"friends");

                res.send({"msg":"log in succesfull","token":token})
            }else{
                res.send("something went wrong")
            }

        })
    }
    }else{
        res.send({"msg":"log in first"})
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
