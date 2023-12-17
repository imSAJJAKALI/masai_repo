const mongoose =require('mongoose')

const userSchema=mongoose.Schema({
    name:String,
    email:String,
    password:String
})

const userModel=mongoose.model("user_list",userSchema)

module.exports=userModel
