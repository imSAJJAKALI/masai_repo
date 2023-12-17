const express=require('express')
const { connection } = require('./db')
const {Route}=require('./Routes/sigupRouter')
const app=express()
app.use(express.json())

app.use(Route)

app.listen(8080,async()=>{

    try {
        await connection
        console.log('connect to db')
    } catch (error) {
        
    }
    console.log('server runnig on port 8080')
})
