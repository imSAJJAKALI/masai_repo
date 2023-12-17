const mongoose =require('mongoose')

const userSchema=mongoose.Schema({
    name:String,
    email:String,
    pass:String,
    city:String,
    age:Number
})

const userModel=mongoose.model("user_list",userSchema)

module.exports=userModel
