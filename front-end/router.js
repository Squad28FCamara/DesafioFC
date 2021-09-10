const express = require('express');
const { readFileSync } = require('fs');

const listUserAppointments = require('./services/listUserAppointment');
const create = require('./user.reservation.js');

const router = express.Router();

const data = JSON.parse(readFileSync('data.json').toString());

router.get('/', async (req, res) => {
  const reservations = await listUserAppointments(
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MzEzMDQzNTksImV4cCI6MTYzMTM5MDc1OSwic3ViIjoiN2I4MjEwMWYtNzllZS00MGMwLTk2OGUtNGRmYTA5NWUyNTY0In0.ZwitHJRSQj-X0jWsreu3XEula_J5HBj5dM8escvKDGg'
  );
});

router.get('/login', (req, res) => res.render('login'));

router.get('/', (req, res) => res.render('dashboard', { data }));

router.get('/reserve', (req, res) => res.render('reserve', { data }));

router.post('/reserve', create);

router.get('/covid', (req, res) => res.render('covid', { data }));

module.exports = router;
