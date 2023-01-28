const express = require('express');

const app = express();

// GET: /api/issues
app.get('/', (req, res) => {
  res.json({ issues: [] });
});

module.exports = app;
