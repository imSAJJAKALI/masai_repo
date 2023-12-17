const express = require('express');
const multer = require('multer');
const csvParser = require('csv-parser');
const { MongoClient } = require('mongodb');

const app = express();
const PORT = 5000;


const url = 'mongodb://localhost:27017';
const dbName = 'csvdata';

MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
  if (err) {
    console.error('Error connecting to MongoDB:', err);
    return;
  }
  console.log('Connected to MongoDB successfully');
  const db = client.db(dbName);


  const collection = db.collection('actors');

 
  const upload = multer({ dest: 'uploads/' });

 
  app.post('/upload', upload.single('csvFile'), (req, res) => {
    const file = req.file;
    if (!file) {
      return res.status(400).json({ error: 'No CSV file uploaded' });
    }

    const results = [];
    fs.createReadStream(file.path)
      .pipe(csvParser())
      .on('data', (data) => results.push(data))
      .on('end', () => {
      
        collection.insertMany(results, (err, result) => {
          if (err) {
            console.error('Error inserting data into MongoDB:', err);
            return res.status(500).json({ error: 'Failed to insert data' });
          }
          res.json({ message: 'CSV data converted and stored successfully' });
        });
      });
  });

 
  app.get('/search', (req, res) => {
    const { query } = req.query;
   
    collection.find({ 'Home Address': query }).toArray((err, result) => {
      if (err) {
        console.error('Error searching data in MongoDB:', err);
        return res.status(500).json({ error: 'Failed to perform search' });
      }
      res.json(result);
    });
  });

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
