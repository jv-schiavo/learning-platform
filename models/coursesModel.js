const db = require('./db');

function getCourses(callback)  {
    db.all('SELECT * FROM courses', [], (err,rows) =>{
        if(err) {
            console.log("Error fetching courses", err.message);
            callback(err,null);
        } else { 
            callback(null,rows);

        }
    })
};

const getFilteredCourses = (topicId, callback) => {
  let query = `SELECT title, description FROM courses WHERE 1=1`;
  const params = [];

  if (topicId) {
    query += ` AND topic_id = ?`;
    params.push(topicId);
  }

  db.all(query, params, (err, rows) => {
    callback(err, rows);
  });
};

module.exports = { getCourses,
    getFilteredCourses
 };