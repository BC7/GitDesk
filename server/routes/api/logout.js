const express = require('express');
const { tokenAuthentication, findUser } = require('../../utils/ghworker');
const app = express();

// GET: /api/logout
app.get('/', (req, res) => {
  req.session = null;
  // ToDo: Revoke gh token
  res.status(200).json();
});

module.exports = app;
