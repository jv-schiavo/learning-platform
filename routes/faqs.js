const express = require('express');
const router = express.Router();
const { showFaqs } = require('../controllers/faqsController');

router.get('/faqs', showFaqs);

module.exports = router;