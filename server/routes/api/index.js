const express = require('express');
const issuesRoutes = require('./issues');
const userRoutes = require('./user');
const loginRoute = require('./login');
const logoutRoute = require('./logout');
const app = express();

// /api/issues
app.use('/issues', issuesRoutes);

// /api/user
app.use('/user', userRoutes);

// /api/login
app.use('/login', loginRoute);

// /api/logout
app.use('/logout', logoutRoute);

// /api
app.get('/', (req, res) => {
  console.log('Healthy Server');
  res.json({});
});

module.exports = app;
