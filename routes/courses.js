const express = require('express');
const router = express.Router();
const { showCourses } = require('../controllers/coursesController');

router.get('/', showCourses);

module.exports = router;




