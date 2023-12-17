// const express=require('express');

// const dataModel = require('../Model/dataModel');


// const dataRoute=express.Router()

// app.post('/post',async(req,res)=>{
//     const {title,content}=req.body;
//         try {
            
//             const data=new dataModel({title,content})
//             await data.save()
//             res.send({"massage":"data post successfully","data":data})
//         } catch (error) {
//             console.log(error)
//         }
//     })

//     app.get('/get',async(req,res)=>{

//         try {
//             const data=await data.find()
//             res.send(data)
//         } catch (error) {
//             console.log(error)
//         }
//     })


//     app.patch('/patch/:id',async(req,res)=>{
//         const deta=req.body
//        const id=req.params.id
//          try {
//            const data=await dataModel.findByIdAndUpdate({_id:id},deta)
          
//            res.send(data)
//          } catch (error) {
//              console.log(error)
//          }
     
//      })
     
//      app.delete('/delete/:id',async(req,res)=>{
         
//         const id=req.params.id
//           try {
//             await dataModel.findByIdAndDelete({_id:id})
//            res.send('data has been deleted successfully........')
//           } catch (error) {
//               console.log(error)
//           }
      
//       })


//     module.exports=dataRoute