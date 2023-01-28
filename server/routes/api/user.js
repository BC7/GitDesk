const express = require('express');
const app = express();

// /api/user
app.get('/user', (req, res) => {
  res.json({ user: {} });
});

module.exports = app;
