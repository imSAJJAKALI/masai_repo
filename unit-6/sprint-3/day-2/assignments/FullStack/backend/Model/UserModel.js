const mongoose=require('mongoose')

const UserSchema=mongoose.Schema({
    username:{type:String},
    email:{type:String},
    dob:{type:String},
    role:{type:String},
    location:{type:String},
    password:{type:String},
    confirmpassword:{type:String}
})

const SignUpModel=new mongoose.model('UserDetail',UserSchema)

module.exports={SignUpModel}
