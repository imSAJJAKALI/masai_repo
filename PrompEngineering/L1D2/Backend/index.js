const express = require('express')
const cors = require('cors')
const dotenv=require('dotenv')
const axios= require('axios')
dotenv.config()

const app= express()
app.use(express.json())
app.use(cors())



app.post('/convert',async(req,res)=>{
    try {
        const {code,language}=req.body
        const prompt=`convert this code ${code} into ${language} only convert the code not write any extra word`
        const response= await axios.post('https://api.openai.com/v1/chat/completions',{
            model:'gpt-3.5-turbo',
            temperature:0.5,
            max_tokens:2038,
            messages:[{role:'system',content:'You are a code convertor'},{role:'user',content:prompt}]

        },
        {

            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.API_KEY}`,
            },
        }
    );
        
    const codes = response.data.choices[0].message.content;
    res.json({ codes });
        
    } catch (error) {
        res.json(error)
    }
})

app.post('/debug',async(req,res)=>{
    try {
        const {code}=req.body
        const prompt=`debug this code ${code} only debug the code and write some comment if need or not write any extra word`
        const response= await axios.post('https://api.openai.com/v1/chat/completions',{
            model:'gpt-3.5-turbo',
            temperature:0.5,
            max_tokens:2038,
            messages:[{role:'system',content:'You are a code debuger'},{role:'user',content:prompt}]

        },
        {

            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.API_KEY}`,
            },
        }
    );
        
    const codes = response.data.choices[0].message.content;
    res.json({ codes });
        
    } catch (error) {
        res.json(error)
    }
})

app.post('/checkquality',async(req,res)=>{
    try {
        const {code,language}=req.body
        const prompt=`check quality of this code ${code} and give 3-4 tips and give rating of this code `
        const response= await axios.post('https://api.openai.com/v1/chat/completions',{
            model:'gpt-3.5-turbo',
            temperature:0.5,
            max_tokens:2038,
            messages:[{role:'system',content:'You are a code check Quality'},{role:'user',content:prompt}]

        },
        {

            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.API_KEY}`,
            },
        }
    );
        
    const codes = response.data.choices[0].message.content;
    res.json({ codes });
        
    } catch (error) {
        res.json(error)
    }
})

app.get('/',async(req,res)=>{
    try {
        res.status(200).send('Home Page')
    } catch (error) {
        res.status(500).send('Some Error')
    }
})


app.listen(8080,async()=>{
    try {
        
    } catch (error) {
        
    }
    console.log('server running on port 8080 successfully......')
})
