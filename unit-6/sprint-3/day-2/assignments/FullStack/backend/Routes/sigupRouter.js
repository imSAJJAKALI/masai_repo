const express=require("express")
const {SignUpModel}=require("../Model/UserModel")
const {authentication}=require("../Middleware/authenticate")
const jwt=require('jsonwebtoken')
const bcrypt=require('bcrypt')
const Route=express.Router()
// Route.use(validator)
Route.post("/signup",async(req,res)=>{
    const {username,email,dob,role,location,password,confirmpassword}=req.body
    try {
        bcrypt.hash(password,8,async(err,hash)=>{
            if(err) res.send("something went wrong")
            else{

                const user=new SignUpModel({username,email,dob,role,location,password:hash,confirmpassword})
               await user.save()
               res.send({"msg":"new user has been added","user":user})
            }
        })
    } catch (error) {
        console.log(error);
    }
   
})
Route.post("/login",async(req,res)=>{
    const {email,password}=req.body
    try {
        const user=await SignUpModel.find({email})
        if(user.length>0){
            bcrypt.compare(password,user[0].password,(err,result)=>{
                if(result){
                    const token=jwt.sign({UserID:user[0]._id},"friends");

                    res.send({"msg":"log in succesfull","token":token})
                }else{
                    res.send("something went wrong")
                }

            })
        }else{
            res.send({"msg":"log in first"})
        }
    } catch (error) {
        console.log(error)
        
    }
   
})
Route.get("/all",async(req,res)=>{
let query=req.query
try {
    const bodyall=await SignUpModel.find(query)
    res.send(bodyall)
} catch (error) {
    console.log(error)
}
})
Route.get("/all/:id",async(req,res)=>{
    let query=req.params.id
    let output=req.body
    try {
        const body=await SignUpModel.find({_id:query},output)
        res.send(body)
    } catch (error) {
        console.log(error)
    }
    })
    Route.patch("/add/:id",authentication,async(req,res)=>{
        let ID=req.params.id
        let output=req.body
        try {
            const bodypatch=await SignUpModel.findByIdAndUpdate({_id:ID},output)
            res.send(bodypatch)
        } catch (error) {
            console.log(error.msg)
        }
        })
        Route.delete("/delete/:id",authentication,async(req,res)=>{
            let ID=req.params.id
          
            try {
                const bodydelete=await SignUpModel.findByIdAndDelete({_id:ID})
                res.send(bodydelete)
            } catch (error) {
                console.log(error.msg)
            }
            })

module.exports={
    Route
}