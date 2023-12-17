// import required modules

// export the server
// eg.module.exports = app;


// index.js

const express = require('express');
const multer = require('multer');

const app = express();
const upload = multer({ dest: 'uploads/' });

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to the server' });
});

app.post('/upload', upload.single('file'), (req, res) => {
  res.status(200).json({ message: 'File uploaded successfully' });
});

module.exports = app;

