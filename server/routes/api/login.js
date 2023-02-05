const express = require('express');
const app = express();

// POST: /api/login
app.post('/login', (req, res) => {
  const { code } = req.body;
  let data = {};

  if (code) {
    console.log('GH CODE\n', code);
    req.session.ghtoken = code;
    req.session.user = null;
  }

  res.json(data);
});

module.exports = app;
