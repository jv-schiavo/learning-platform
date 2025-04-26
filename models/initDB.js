const fs = require('fs');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const db = new sqlite3.Database(path.join(__dirname, '../data/database.db'), (err) => {
  if (err) {
    console.error('Failed to connect to the database:', err.message);
  } else {
    console.log('Connected to the database for initialization.');
  }
});

const schema = fs.readFileSync(path.join(__dirname, 'schema.sql'), 'utf8');

db.exec(schema, (err) => {
  if (err) {
    console.error('Failed to initialize database:', err.message);
  } else {
    console.log('Database initialized with schema.');
  }
});
