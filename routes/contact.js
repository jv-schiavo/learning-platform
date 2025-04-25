const express = require('express');
const router = express.Router();
const { showContact } = require('../controllers/contactController');

router.get('/contact', { showContact });

module.exports = router;