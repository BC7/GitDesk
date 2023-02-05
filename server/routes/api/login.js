const express = require('express');
const { tokenAuthentication, findUser } = require('../../utils/ghworker');
const app = express();

// POST: /api/login
app.post('/', (req, res) => {
  const { code } = req.body;
  let data = { test: null };

  if (code) {
    // exchange code for auth token
    tokenAuthentication(code)
      .then((response) => {
        const { token } = response;
        findUser(token)
          .then((userData) => {
            const { login } = userData;
            req.session.ghtoken = token;
            req.session.user = login;
          })
          .catch(() => {});
      })
      .catch(() => {});
  }

  res.json(data);
});

module.exports = app;
