//  import required modules from nodejs and build the server
const express = require('express')
const validatorfunction=require('./middlewares/validator')
const app=express()

app.use(express.json())
app.post('/',validatorfunction,(req,res)=>{

    res.send('data received')
})

app.listen(8080,()=>{
    console.log('running on port  8080')
})


// export the server

module.exports=app