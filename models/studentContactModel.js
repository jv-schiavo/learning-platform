const db = require('./db');

function insertStudentContacts(name, email, subject, message, callback) {
    const createdAt = new Date().toISOString();

    db.all('INSERT INTO studentContacts (NAME, EMAIL, SUBJECT, MESSAGE, CREATED_AT) VALUES (?,?,?,?,?)',
    [name, email, subject, message, createdAt], 
    (err)=>{
        if(err){
            console.log('Error inserting student messages;', err.message);
            callback(err,null);
        } else {
            callback(null);
        }
    }
)
};

module.exports = { insertStudentContacts };