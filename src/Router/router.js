const express = require('express');

const router = express.Router();

const { checkData } = require('../controller/controller');

router.get('/check', checkData);

router.get('/apple', (req, res) => res.send('yooo'));

module.exports = router;
