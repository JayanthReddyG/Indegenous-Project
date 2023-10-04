// server.js
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path'); // Required for serving static files

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// Serve static files (including index.html) from a 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Mock research data (replace with your actual data source)
const researchData = [
  {
    id: 1,
    title: 'Research Result 1',
    content: 'This is the content of Research Result 1.',
  },
  {
    id: 2,
    title: 'Research Result 2',
    content: 'This is the content of Research Result 2.',
  },
  // Add more research data objects as needed
];

app.post('/search', (req, res) => {
  const { keyword, limit } = req.body;

  // Mock API response with filtered data based on the keyword
  const results = researchData.filter((result) =>
    result.title.toLowerCase().includes(keyword.toLowerCase())
  );

  // Limit the number of results based on the 'limit' parameter
  const limitedResults = results.slice(0, parseInt(limit));

  res.json({ results: limitedResults });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
