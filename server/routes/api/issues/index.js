const express = require('express');

const getAllIssues = require('./all');
const createIssue = require('./create');
const deleteIssue = require('./delete');
const getIssue = require('./details');
const updateIssue = require('./update');

const app = express();

// /api/issues
app.use(getIssue);
app.use(getAllIssues);
app.use(createIssue);
app.use(deleteIssue);
app.use(updateIssue);

// CREATE, READ, UPDATE, DELETE, ALL

module.exports = app;
