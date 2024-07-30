const express = require('express');
const path = require('path');
const app = express();

// Get port from command line arguments or use 3000 as default
const port = process.argv[2] || 3000;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});