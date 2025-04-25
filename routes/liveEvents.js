const express = require('express');
const router = express.router();
const { showLiveEvents } = require('../controllers/liveEventsController');

router.get('/liveEvents', showLiveEvents);

module.exports = router;