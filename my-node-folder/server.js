const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

// Serve static files from 'public' directory
app.use(express.static('public'));

// Define a route for the root path
app.get('/', (req, res) => {
  res.send('Welcome to my server!');
});

// Route to serve data.json
app.get('/data', (req, res) => {
  fs.readFile('public/data.json', 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error reading file');
      return;
    }
    res.json(JSON.parse(data)); // Parse and send the JSON data
  });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
