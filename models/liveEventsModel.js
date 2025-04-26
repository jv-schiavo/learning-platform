const db = require('./db');

function getLiveEvents(callback) {
    db.all('SELECT * FROM liveEvents', [], (err,rows)=>{
        if(err){
            console.log('Error fetching Live Events', err.message);
            callback(err,null);
        } else{
            callback(null,rows);
        };
    });
};

module.exports = { getLiveEvents }; 