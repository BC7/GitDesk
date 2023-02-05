const express = require('express');
const issuesRoutes = require('./issues');
const userRoutes = require('./user');
const loginRoute = require('./login');
const app = express();

// /api/issues
app.use('/issues', issuesRoutes);

// /api/user
app.use('/user', userRoutes);

// /api/login
app.use('/login', loginRoute);

// /api
app.get('/', (req, res) => {
  console.log('Healthy Server');
  res.json({});
});

module.exports = app;
