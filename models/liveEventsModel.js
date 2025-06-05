const db = require('./db');

function getLiveEvents(callback) {
    const query = `SELECT 
      liveEvents.title, 
      liveEvents.date, 
      liveEvents.description, 
      instructors.name AS instructor_name
    FROM liveEvents
    JOIN instructors ON liveEvents.instructor_id = instructors.instructor_id
    ORDER BY liveEvents.date ASC;`;
    
    db.all(query, [], (err, rows) => {
    callback(err, rows);
  });
};

const getFilteredLiveEvents = (month, callback) => {
  let query = `
    SELECT liveEvents.title, liveEvents.description, liveEvents.date, instructors.name AS instructor_name
    FROM liveEvents
    JOIN instructors ON liveEvents.instructor_id = instructors.instructor_id
  `;

  const params = [];

  if (month) {
    query += " WHERE strftime('%m', date) = ?";
    params.push(month.toString().padStart(2, '0')); // ensures "01", "02", ..., "12"
  }

  query += " ORDER BY date ASC";
  
  db.all(query, params, (err, rows) => {
    callback(err,rows);
  });
}

module.exports = { 
  getLiveEvents,
  getFilteredLiveEvents
}; 