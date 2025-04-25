const fs = require('fs');
const path = require('path');

const getContacts = ()=> {
    const filePath = path.join(__dirname, '../data/contact.json');
    const data = fs.readFileSync(filePath,'utf8');
    const parsedData = JSON.parse(data);
    return parsedData.contact;
};

module.exports = { getContacts }; 