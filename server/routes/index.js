const express = require('express');
const apiRoutes = require('./api');
const app = express();

// /api/*
app.use('/api', apiRoutes);

module.exports = app;
