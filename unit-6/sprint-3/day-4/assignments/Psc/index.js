const express=require('express')
const connection = require('./db')
const userRoute = require('./Route/userRoute')
const jwt =require('jsonwebtoken')
const authMiddleware = require('./Middleware/authMiddleware')
const app=express()

app.use(express.json())

app.use('/users',userRoute)

app.get('/',(req,res)=>{
    res.send('HomePage')
})

app.get('/todos',authMiddleware,async(req,res)=>{

    res.send({msg:"todos are here...."})
   
})

app.listen(8080,async()=>{
try {
    
    await connection
    console.log('connected to db')
} catch (error) {
    console.log('db not connected')
}
console.log('server is running on port 8080')
})

