const express = require('express');
const issuesRoutes = require('./issues');
const userRoutes = require('./user');
const app = express();

// /api/issues
app.use('/issues', issuesRoutes);

// /api/user
app.use('/user', userRoutes);

// /api
app.get('/', (req, res) => {
  console.log('Healthy Server');
  res.json({});
});

module.exports = app;
