const express = require('express');
const router = express.Router();
const { showFaqs } = require('../controllers/faqsController');

router.get('/', showFaqs);

module.exports = router;