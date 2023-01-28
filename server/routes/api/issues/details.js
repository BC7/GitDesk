const express = require('express');

const app = express();

// GET: /api/issues
app.get('/:repository/:id', (req, res) => {
  res.json({ issue: {} });
});

module.exports = app;
