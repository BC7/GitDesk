const express = require('express');
const { findUser } = require('../../utils/ghworker');
const app = express();

// Get authenticated user details
// GET: /api/user
app.get('/', async (req, res) => {
  const { user } = req.session;
  const { ghtoken } = req.session;

  let data = {};

  if (user) {
    await findUser(ghtoken)
      .then((ghData) => {
        data = ghData;
      })
      .catch(() => {
        req.session = null;
      });
  }

  res.json(data);
});

module.exports = app;
