const express = require('express');
const { tokenAuthentication, findUser } = require('../../utils/ghworker');
const app = express();

// POST: /api/login
app.post('/', async (req, res) => {
  const { code } = req.body;
  let data = { test: null };

  if (code) {
    // exchange code for auth token
    await tokenAuthentication(code)
      .then(async (response) => {
        const { token } = response;
        await findUser(token)
          .then((userData) => {
            const { login } = userData;
            req.session.ghtoken = token;
            req.session.user = login;
          })
          .catch(() => {
            req.session = null;
          });
      })
      .catch(() => {
        req.session = null;
      });
  }

  res.json(data);
});

module.exports = app;
