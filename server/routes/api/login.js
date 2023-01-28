const express = require('express');
const app = express();

// /api/login
app.get('/login', (req, res) => {
  res.json({ user: {} });
});

module.exports = app;
