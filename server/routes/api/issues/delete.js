const express = require('express');

const app = express();

// DELETE ISSUE/PR
// DELETE: /api/issues
app.delete('/', (req, res) => {
  res.json({ status: 'deleted' });
});

module.exports = app;
