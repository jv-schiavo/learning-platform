const { getLiveEvents } = require('../models/liveEventsModel');
const { getFilteredLiveEvents } = require('../models/liveEventsModel');

const showLiveEvents = (req, res) => {
  getLiveEvents((err, liveEvents) => {
    if (err) return res.status(500).send('Error loading live events');
    res.render('pages/liveEvents', { liveEvents });
  });
};

const apiGetLiveEvents = (req, res) => {
  const month = req.query.month;
  getFilteredLiveEvents(month, (err, events) => {
    if (err) return res.status(500).json({error: 'Error loading live events'});
    res.json(events)
  });
};


module.exports = { 
  showLiveEvents,
  apiGetLiveEvents
 };