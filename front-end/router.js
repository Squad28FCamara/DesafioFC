const express = require('express');
const { readFileSync } = require('fs');
const { create, reservation, confirm } = require('./user.reservation.js');

const router = express.Router();

const app = express();

const data = JSON.parse(readFileSync('data.json'));

app.use(express.json());

router.get('/', async (req, res) => res.render('dashboard'));

router.get('/login', (req, res) => res.render('login'));

router.get('/reserve', (req, res) => res.render('reserve'));

router.get('/', (req, res) =>
  res.render('dashboard', { data, location: 'Dashboard' })
);

router.get('/reserve', (req, res) =>
  res.render('reserve', { data, location: 'Reservar' })
);

router.post('/reserve', create);

router.post('/confirmation', confirm);

router.get('/review', (req, res) =>
  res.render('review', { reservation, location: 'Reservar' })
);

router.get('/covid', (req, res) =>
  res.render('covid', { data, location: 'COVID-19' })
);

module.exports = router;
