const express=require('express')
const connection = require('./db')
const userRoute = require('./Route/userRoute')
const jwt =require('jsonwebtoken')
const authMiddleware = require('./Middleware/authMiddleware')
const dataRoute = require('./Route/dataRoute')
const dataModel = require('./Model/dataModel')
const app=express()

app.use(express.json())

app.use('/users',userRoute)




app.get('/',(req,res)=>{
    res.send('HomePage')
})

app.post('/posts/add',async(req,res)=>{
    const {title,content}=req.body;
        try {
            
            const data=new dataModel({title,content})
            await data.save()
            res.send({"massage":"data post successfully","data":data})
        } catch (error) {
            console.log(error)
        }
    })

    app.get('/posts/get',async(req,res)=>{

        try {
            const data=await data.find()
            res.send(data)
        } catch (error) {
            console.log(error)
        }
    })


    app.patch('/posts/patch/:id',async(req,res)=>{
        const deta=req.body
       const id=req.params.id
         try {
           const data=await dataModel.findByIdAndUpdate({_id:id},deta)
          
           res.send(data)
         } catch (error) {
             console.log(error)
         }
     
     })
     
     app.delete('/posts/delete/:id',async(req,res)=>{
         
        const id=req.params.id
          try {
            await dataModel.findByIdAndDelete({_id:id})
           res.send('data has been deleted successfully........')
          } catch (error) {
              console.log(error)
          }
      
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

