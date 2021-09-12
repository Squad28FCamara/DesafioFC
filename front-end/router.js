const express = require('express');
const { readFileSync } = require('fs');
const axios = require('axios');

const listUserAppointments = require('./services/listUserAppointment');
const create = require('./user.reservation.js');
const createSession = require('./services/createSession');

const router = express.Router();

const data = JSON.parse(readFileSync('data.json').toString());

router.get('/', async (req, res) => {
  const reservations = await listUserAppointments();
  return res.render('dashboard', { data: { reservations } });
});

router.get('/login', (req, res) => res.render('login', { data }));

router.get('/reserve', (req, res) => res.render('reserve', { data }));

router.post('/reserve', create);

router.get('/covid', (req, res) => res.render('covid', { data }));

module.exports = router;
