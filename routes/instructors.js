const express = require('express');
const router = express.Router();
const { showInstructors } = require('../controllers/instructorsController');

router.get('/', showInstructors);

module.exports = router;