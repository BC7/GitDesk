const express = require('express');
const { findUser } = require('../../utils/ghworker');
const app = express();

// Get authenticated user details
// GET: /api/user
app.get('/', (req, res) => {
  const { user } = req.session;
  const { ghatoken } = req.session;

  let data = {};

  if (user) {
    findUser(ghtoken)
      .then((ghData) => {
        data = ghData;
      })
      .catch();
  }

  res.json(data);
});

module.exports = app;
