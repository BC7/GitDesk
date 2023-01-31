const express = require('express');
const app = express();

// Get authenticated user details
// GET: /api/user
app.get('/', (req, res) => {
  const { user } = req.session;
  res.json({ user: null });
});

module.exports = app;
