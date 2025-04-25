const { getLiveEvents } = require('../models/liveEventsModel');

const showLiveEvents = (req,res) =>{
    const liveEvents = getLiveEvents();
    res.render('pages/events', { liveEvents });
};

module.exports = { showLiveEvents };