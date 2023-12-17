const express=require('express')
const dotenv=require('dotenv')
const connection =require('./db')
const UserRouter=require('./Routes/UserRoutes')
const cors=require('cors')

// const Authentication = require('./Middleware/Authentication')
// const {getPosts, createPost, updatePost, deletePost}= require('./Routes/PostRoutes')
const router = require('./Routes/router')
dotenv.config()
const app=express()
app.use(cors())
app.use(express.json())

app.use('/users',UserRouter)

app.use('/post',router)

app.listen(process.env.PORT,async()=>{

    try {
        await connection
        console.log('connected to db')
    } catch (error) {
        console.log(error)
    }
    console.log('server running ')
})
