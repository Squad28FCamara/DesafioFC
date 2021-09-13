const express = require('express');
const { readFileSync } = require('fs');

const listUserAppointments = require('./services/listUserAppointment');
const create = require('./user.reservation.js');
const createSession = require('./services/createSession');

const router = express.Router();

const data = JSON.parse(readFileSync('data.json').toString());

router.get('/', async (req, res) => res.render('dashboard'));

router.get('/login', (req, res) => res.render('login', { data }));

router.get('/reserve', (req, res) => res.render('reserve', { data }));

router.post('/reserve', create);

router.get('/covid', (req, res) => res.render('covid', { data }));

module.exports = router;
