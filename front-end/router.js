const express = require('express');
const { readFileSync } = require('fs');
const create = require('./user.reservation.js');

const router = express.Router();

const akeladata = JSON.parse(readFileSync('data.json').toString());

router.get('/', async (req, res) => res.render('dashboard'));

router.get('/login', (req, res) => res.render('login'));

router.get('/reserve', (req, res) => res.render('reserve'));

router.post('/reserve', create);

router.post('/confirmation', confirm);

router.get('/review', (req, res) => res.render('review', { reservation }));

router.get('/covid', (req, res) => res.render('covid', { akeladata }));

module.exports = router;
