const mongoose =require('mongoose')

const dataSchema=mongoose.Schema({
    title:String,
    content:String
})

const dataModel=mongoose.model("data_list",dataSchema)

module.exports=dataModel
