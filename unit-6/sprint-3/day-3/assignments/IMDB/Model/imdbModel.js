const express=require('express')
const mongoose = require('mongoose')

const imdbSchema=mongoose.Schema({
    title:{type:String,required:true},
    year:{type:Number,required:true},
    poster:{type:String,required:true},
    rating:{type:Number,required:true},
})

const IMDBModel=new mongoose.model('movie_list',imdbSchema)

module.exports=IMDBModel;
