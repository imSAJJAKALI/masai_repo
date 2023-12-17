const mongoose = require('mongoose')
const Express = require('express')
const dotenv =require('dotenv')
const connection = require('./db')
const Route=require('./Routes/Route')
dotenv.config()
const app=Express()

app.use(Express.json())
app.use(Route)

app.listen(process.env.port,async(req,res)=>{

    try {
        await connection
        console.log('db connected successfully...')
    } catch (error) {
        console.log(error)
    }
    console.log('server running on port :',process.env.port)
})
