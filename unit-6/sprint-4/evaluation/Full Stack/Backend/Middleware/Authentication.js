const jwt= require('jsonwebtoken')
const UserModel= require('../Model/UserModel')

require('dotenv').config()

const Authentication=async(req,res,next)=>{
    try {
        const token=req.headers.authorization.split(' ')
        const decoded=jwt.verify(token,process.env.SECRET_KEY)
        const {userID}=decoded;
        const userExist=await UserModel.findByID(userID)
        if(!userExist){
            res.send({msg:"Unathorized person"})
        }
        res.userExist=userExist
        next()
    } catch (error) {
        res.send({msg:"error"})
    }
}

module.exports=Authentication;