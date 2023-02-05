require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const helmet = require('helmet');
const routes = require('./routes');

const PORT = process.env.PORT;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(
  cookieSession({
    name: 'gd-sess',
    keys: process.env.GITDESKCOOKIESECRET.split(';'),

    // Cookie Options
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
  })
);

process.env.ENV !== 'dev' && app.use(helmet());

app.use('/', routes);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
