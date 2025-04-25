const fs = require('fs');
const path = require('path');

const getContacts = ()=> {
    const filePath = path.join(__dirname, '..data/contact.json');
    const data = fs.readFileSync(filePath,'utf8');
    return JSON.parse(data);
};

module.exports = { getContacts }; 