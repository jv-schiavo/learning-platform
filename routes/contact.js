const express = require('express');
const router = express.Router();
const { showContacts } = require('../controllers/contactController');

router.get('/contact', showContacts);

module.exports = router;