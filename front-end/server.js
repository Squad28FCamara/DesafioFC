const express = require('express');
const nunjucks = require('nunjucks');
const router = require('./router.js');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use(express.static('assets'));
app.use(router);

app.set('view engine', 'njk');

nunjucks.configure('views', {
  express: app,
  noCache: true,
  autoescape: false,
});

app.listen(5000, () => console.log('Server is running'));
