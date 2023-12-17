const express = require('express');
const cors = require('cors');
const connection = require('./db');
const userRouter = require('./Route/UserRouter');
const app = express();
const auth=require('./Middleware/auth');
const blogRouter = require('./Route/BlogRouter');

app.use(express.json());
app.use(cors());

app.use('/api', userRouter); 
app.use('/api',blogRouter)
app.get('/',(req,res)=>{
    res.json({home:"Home Page"})
})

app.listen(8080, async () => {
    try {
        await connection;
        console.log('db connected');
    } catch (error) {
        console.log('db not connected');
    }
    console.log('server running on port 8080');
});
