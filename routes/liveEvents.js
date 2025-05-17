const express = require('express');
const router = express.Router();
const { showLiveEvents } = require('../controllers/liveEventsController');

router.get('/', showLiveEvents);

module.exports = router;