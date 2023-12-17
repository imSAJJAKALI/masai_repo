const express =require('express')

const IMDBModel= require('../Model/imdbModel')

const Route= express.Router()

Route.post('/post',async(req,res)=>{
const {title,year,poster,rating}=req.body;
    try {
        
        const movieData=new IMDBModel({title,year,poster,rating})
        await movieData.save()
        res.send({"massage":"movie post successfully","data":movieData})
    } catch (error) {
        console.log(error)
    }
})

Route.post('/manypost',async(req,res)=>{
    const movies=req.body;
        try {
            const movieData= await IMDBModel.insertMany(movies)
            res.send({"massage":"movie post successfully","data":movieData})
        } catch (error) {
            console.log(error)
        }
    })

Route.get('/getmovies',async(req,res)=>{

    try {
        const moviesData=await IMDBModel.find()
        res.send(moviesData)
    } catch (error) {
        console.log(error)
    }
})

Route.patch('/patch/:id',async(req,res)=>{
   const movie=req.body
  const id=req.params.id
    try {
      const movieData=await IMDBModel.findByIdAndUpdate({_id:id},movie)
     
      res.send(movieData)
    } catch (error) {
        console.log(error)
    }

})

Route.delete('/delete/:id',async(req,res)=>{
    
   const id=req.params.id
     try {
       await IMDBModel.findByIdAndDelete({_id:id})
      res.send('data has been deleted successfully........')
     } catch (error) {
         console.log(error)
     }
 
 })
 
 Route.get('/filter/:title', async (req, res) => {
    const { title } =req.params;
  
    try {
      const movies = await IMDBModel.find({ title: { $regex: title, $options: 'i' } });
      res.send(movies);
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: "An error occurred while filtering movies" });
    }
  });

  
 Route.get('/filter/:rating', async (req, res) => {
    const { rating } =req.params;
  
    try {
        const filteredMovies = await IMDBModel.find({ rating: parseInt(rating) });
    res.send(filteredMovies);
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: "An error occurred while filtering movies" });
    }
  });

  Route.get('/searching/:search', async (req, res) => {
    const { search } =req.query;
  
    try {
        const filteredMovies = await IMDBModel.find({ title: { $regex: search, $options: 'i' }});
    res.send(filteredMovies);
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: "An error occurred while filtering movies" });
    }
  });

  Route.get('/pagination/', async (req, res) => {
   
    const page = parseInt(req.query.page) || 1; // Default to page 1 if not provided
    const limit = parseInt(req.query.limit) || 10; // Default to limit 10 if not provided
  
    try {
      

      const movies = await IMDBModel.find({})
        .skip((page - 1) * limit)
        .limit(limit);
  
      res.send({
        movies
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: "An error occurred while filtering movies" });
    }
  });
  

module.exports=Route
