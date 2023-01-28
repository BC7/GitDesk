const express = require('express');

const app = express();

// UPDATE ISSUE/PR
// PUT: /api/issues
app.put('/', (req, res) => {
  res.json({ status: 'deleted' });
});

module.exports = app;
