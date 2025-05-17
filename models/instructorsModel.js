const db = require('./db');

function getInstructors(callback) {
    db.all('SELECT * FROM instructors', [], (err,rows)=>{
        if(err){
            console.log('Error fetching', err.message);
            callback(err,null);
        } else {
            callback(null,rows);
        };
    });
};

module.exports = { getInstructors };

