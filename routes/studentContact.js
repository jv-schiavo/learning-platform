const express = require('express');
const router = express.Router();
const { showContactPage, submitContactForm } = require('../controllers/studentContactsController');

router.get('/', showContactPage);
router.post('/', submitContactForm);

module.exports = router;
