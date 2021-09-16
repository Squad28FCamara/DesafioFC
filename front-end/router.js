const express = require('express');
const { create, reservation, confirm } = require('./user.reservation.js');

const router = express.Router();

const app = express();

app.use(express.json());

let location = '';

router.get('/login', (req, res) => res.render('login'));

router.get('/', (req, res) => {
  location = 'Dashboard';
  res.render('dashboard', { location });
});

router.get('/reserve', (req, res) => {
  location = 'Reservar';
  res.render('reserve', { location });
});

router.post('/reserve', create);

router.post('/confirmation', confirm);

router.get('/review', (req, res) => {
  location = 'Reservar';
  res.render('review', { reservation, location });
});

router.get('/covid', (req, res) =>
  res.render('covid', { location: 'COVID-19' })
);

module.exports = router;
