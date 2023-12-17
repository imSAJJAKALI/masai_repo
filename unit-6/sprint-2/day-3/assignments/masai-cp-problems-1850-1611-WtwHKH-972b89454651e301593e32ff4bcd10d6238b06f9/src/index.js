// import required modules

// export the server
// eg.module.exports = app;
// index.js

const express = require('express');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');

const app = express();
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'src', 'access.log'), { flags: 'a' });

// Morgan middleware for logging
app.use(morgan('combined', { stream: accessLogStream }));

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to the server' });
});

app.get('/get-users', (req, res) => {
  res.status(200).json({ message: 'Here is the list of all users' });
});

app.post('/add-user', (req, res) => {
  res.status(201).json({ message: 'User added successfully' });
});

app.put('/user/:id', (req, res) => {
  const userId = req.params.id;
  res.status(201).json({ message: `User ${userId} updated successfully` });
});

app.delete('/user/:id', (req, res) => {
  const userId = req.params.id;
  res.status(200).json({ message: `User ${userId} deleted successfully` });
});

module.exports = app;
