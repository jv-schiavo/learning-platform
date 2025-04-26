const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// connect to database

const db = new sqlite3.Database(path.join(__dirname, '../data/database.db'), (err) =>{
    if (err) {
        console.log('Failed to connect to the database', err.message);
    } else {
        console.log('Connected to the database.');
    };
});

module.exports = db;