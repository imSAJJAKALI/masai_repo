const mongoose= require('mongoose')

const UserSchema=mongoose.Schema({
    fullName:String,
    email:String,
    password:String
})

const UserModel=mongoose.model("user_data",UserSchema);

module.exports=UserModel;
