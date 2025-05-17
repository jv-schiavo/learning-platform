const { getLiveEvents } = require('../models/liveEventsModel');

const showLiveEvents = (req, res) => {
  getLiveEvents((err, liveEvents) => {
    if (err) return res.status(500).send('Error loading instructors');
    res.render('pages/liveEvents', { liveEvents });
  });
};

module.exports = { showLiveEvents };