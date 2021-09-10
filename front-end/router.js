const express = require('express');
const { readFileSync } = require('fs');

const create = require('./user.reservation.js');

const router = express.Router();

const data = JSON.parse(readFileSync('data.json').toString());

router.get('/', (req, res) => res.render('dashboard', { data }));

router.get('/reserve', (req, res) => res.render('reserve', { data }));

router.post('/reserve', create);

router.get('/covid', (req, res) => res.render('covid', { data }));

module.exports = router;
