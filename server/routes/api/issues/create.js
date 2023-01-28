const express = require('express');

const app = express();

// CREATE NEW ISSUE/PR
// POST: /api/issues
app.post('/', (req, res) => {
  res.json({ status: 'created' });
});

module.exports = app;
