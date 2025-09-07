const express = require('express');
const router = express.Router();
const { getCurrencies } = require('../Controllers/CurrenciesResponse');
const { CurrencyConvert } = require('../Controllers/CurrencyConvert');

router.get('/currencies', getCurrencies);
router.get('/convert', CurrencyConvert);

module.exports = router;