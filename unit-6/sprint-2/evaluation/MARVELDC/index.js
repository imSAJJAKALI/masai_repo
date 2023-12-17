
// Do not forget to export the server.
const express=require('express')
const fs= require('fs')

const app=express()
app.use(express.json())

app.use((req,res,next)=>{
    const log=`Method:${req.method}, Route:${req.url}, user-agent:${req.headers['user-agent']}\n`

    fs.appendFile('logs.txt',log,(err)=>{
        if(err)console.log('Error writing to logs.txt', err)

    })
    next()
})

app.use('/marvel/update/:id',validateLeader);


function validateLeader(req,res,next){
    const role=req.query.role;
    const pass=req.query.pass;
    if(req.method === 'PATCH' || req.method=== 'DELETE'){
        if(role === 'leader' && pass==='4534'){
            next()
        }else{
            res.status(403).json({message:'You are not authorized to do this operation'})
        }
    }else{
        next()
    }
}


app.get('/',(req,res)=>{
   
    res.send('<h1>Welcome new Team Member, You are about to be the part of best Superhero Team Out there!!!</h1>')
})

app.post('/marvel/addnew',(req,res)=>{
    try {
        
        const data=JSON.parse(fs.readFileSync('./db.json','utf-8'))
    
        data.marvel.push(req.body)
        fs.writeFileSync('./db.json',JSON.stringify(data))
        res.send({message:'New superhero has been added'})
    } catch (error) {
        console.log(error)
    }
})
app.post('/dc/addnew',(req,res)=>{
    try {
        
        const data=JSON.parse(fs.readFileSync('./db.json','utf-8'))
    
        data.dc.push(req.body)
        fs.writeFileSync('./db.json',JSON.stringify(data))
        res.send({message:'New superhero has been added'})
    } catch (error) {
        console.log(error)
    }
})

app.get ('/marvel',(req,res)=>{
    try {
        const data=JSON.parse(fs.readFileSync('./db.json','utf-8'))
        const alias=req.query.alias;
        if(alias){
            const hero= data.marvel.find((h)=>h.alias===alias);
            if(!hero){
                res.status(404).json({message: "Superhero not found"})
            }else{
                res.json(hero)
            }
        }else{
            res.json(data.marvel)
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Something went wrong"})
    }
})

app.get ('/dc',(req,res)=>{
    try {
        const data=JSON.parse(fs.readFileSync('./db.json','utf-8'))
        const alias=req.query.alias;
        if(alias){
            const hero= data.dc.find((h)=>h.alias===alias);
            if(!hero){
                res.status(404).json({message: "Superhero not found"})
            }else{
                res.json(hero)
            }
        }else{
            res.json(data.dc)
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Something went wrong"})
    }
})


app.get('/marvel/:id',(req,res)=>{
    try {
        const data=JSON.parse(fs.readFileSync('./db.json','utf-8'))
        const hero=data.marvel.find((h)=>h.id === parseInt(req.params.id));
        if(!hero){
            res.status(404).json({message: "Superhero not found"})
        }else{
            res.json(hero)
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Something went wrong"})
    }
})

 
app.get('/dc/:id',(req,res)=>{
    try {
        const data=JSON.parse(fs.readFileSync('./db.json','utf-8'))
        const hero=data.dc.find((h)=>h.id === parseInt(req.params.id));
        if(!hero){
            res.status(404).json({message: "Superhero not found"})
        }else{
            res.json(hero)
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Something went wrong"})
    }
})

 app.patch('/marvel/update/:id',validateLeader,(req,res)=>{
    try {
        const data=JSON.parse(fs.readFileSync('./db.json','utf-8'))
        const heroIndex= data.marvel.findIndex((h)=>h.id === parseInt(req.params.id))
        if(heroIndex === -1){
            res.status(404).json({message: "Superhero not found"})
        }else{
            data.marvel[heroIndex]={...data.marvel[heroIndex],...req.body}
            fs.writeFileSync('./db.json',JSON.stringify(data))
            res.json({message: "Patched Character Details"})
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Something went wrong"})
    }
 })

 app.patch('/dc/update/:id',validateLeader,(req,res)=>{
    try {
        const data=JSON.parse(fs.readFileSync('./db.json','utf-8'))
        const heroIndex= data.dc.findIndex((h)=>h.id === parseInt(req.params.id))
        if(heroIndex === -1){
            res.status(404).json({message: "Superhero not found"})
        }else{
            data.dc[heroIndex]={...data.dc[heroIndex],...req.body}
            fs.writeFileSync('./db.json',JSON.stringify(data))
            res.json({message: "Patched Character Details"})
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Something went wrong"})
    }
 })

app.delete('/marvel/delete/:id',validateLeader, (req,res)=>{
    try {
        const data=JSON.parse(fs.readFile('./db.json','utf-8'))
        const heroIndex=data.marvel.findIndex((h)=>h.id===parseInt(req.params.id))
        if(heroIndex===-1){
            res.status(404).json({message:"Superhero not found"})
        }else{
            data.marvel.splice(heroIndex,1)
            fs.writeFileSync('./db.json',JSON.stringify(data))
            res.json({message:"Deleted Character Details"})
        }
    } catch (error) {
        console.log(error)
        res.status(200).json({message:"Something went wrong"})
    }
})
app.delete('/dc/delete/:id',validateLeader, (req,res)=>{
    try {
        const data=JSON.parse(fs.readFile('./db.json','utf-8'))
        const heroIndex=data.dc.findIndex((h)=>h.id===parseInt(req.params.id))
        if(heroIndex===-1){
            res.status(404).json({message:"Superhero not found"})
        }else{
            data.dc.splice(heroIndex,1)
            fs.writeFileSync('./db.json',JSON.stringify(data))
            res.json({message:"Deleted Character Details"})
        }
    } catch (error) {
        console.log(error)
        res.status(200).json({message:"Something went wrong"})
    }
})

app.listen(3000,()=>{
    console.log('Server is running on http://localhost:3000')
})

module.exports=app
// e.g => module.exports = server;
