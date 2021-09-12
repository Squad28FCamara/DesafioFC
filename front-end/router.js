const express = require('express');
const { readFileSync } = require('fs');
const axios = require('axios');

const listUserAppointments = require('./services/listUserAppointment');
const create = require('./user.reservation.js');
const createSession = require('./services/createSession');

const router = express.Router();

const data = JSON.parse(readFileSync('data.json').toString());

router.get('/', async (req, res) => {
  const reservations = await listUserAppointments(
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MzEzMTcxMTMsImV4cCI6MTYzMTQwMzUxMywic3ViIjoiN2I4MjEwMWYtNzllZS00MGMwLTk2OGUtNGRmYTA5NWUyNTY0In0.6bE15lSQxaUUjE1sgRT3UlmWzeFzx2a8UoY8K3e3_U0'
  );
  return res.render('dashboard', { data: { reservations } });
});

router.get('/login', (req, res) => res.render('login', { data }));

router.get('/reserve', (req, res) => res.render('reserve', { data }));

router.post('/reserve', create);

router.get('/covid', (req, res) => res.render('covid', { data }));

module.exports = router;
