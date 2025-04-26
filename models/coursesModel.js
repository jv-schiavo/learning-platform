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

module.exports = { getCourses };