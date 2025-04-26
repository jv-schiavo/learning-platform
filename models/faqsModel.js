const db = require('./db');

function getFaqs(callback) {
    db.all('SELECT * FROM faqs', [], (err,rows)=> {
        if(err) {
            console.log('Error fetching faqs', err.message);
            callback(err,null);
        } else {
            callback(null,rows);
        };
    });
};

module.exports = { getFaqs };

