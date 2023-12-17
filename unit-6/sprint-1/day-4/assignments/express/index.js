const express = require('express');
const bodyParser = require('body-parser');
const shortid = require('shortid');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Store the mappings between short URLs and long URLs
const urlMappings = {};

// Generate a short URL for a given long URL
function generateShortURL(longURL) {
  const shortURL = shortid.generate();
  urlMappings[shortURL] = longURL;
  return shortURL;
}

// Redirect users from the short URL to the original long URL when accessed
app.get('/:shortURL', (req, res) => {
  const { shortURL } = req.params;
  const longURL = urlMappings[shortURL];
  if (longURL) {
    res.redirect(longURL);
  } else {
    res.status(404).send('Short URL not found');
  }
});

// Handle cases where the short URL does not exist or has expired
app.use((req, res) => {
  res.status(404).send('Page not found');
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
