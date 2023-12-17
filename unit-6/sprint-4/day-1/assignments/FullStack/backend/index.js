const express = require('express');
const dotenv = require('dotenv');
const connection = require('./db');
const cors = require('cors');
const UserRouter = require('./Routes/UserRouter');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json()); // Add this middleware to parse incoming JSON data in request bodies

app.use(UserRouter); // Prefix your routes with '/api'


app.listen(process.env.PORT, async () => {
  try {
    await connection
    console.log('Database connected successfully');
  } catch (error) {
    console.log('DB not connected:', error);
  }
  console.log('Server running on port', process.env.PORT);
});
