const jwt=require('jsonwebtoken')

const authMiddleware=(req,res,next)=>{
    const token=req.headers.authorization
    try {
        console.log(token)
        jwt.verify(token,"sajjak",(err,decode)=>{
            if(decode){
               next()
            }else{
                res.send("Invalid token")
            }
        })
        
    } catch (error) {
        
    }
}

module.exports=authMiddleware
