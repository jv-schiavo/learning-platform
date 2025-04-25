const fs = require('fs');
const path = require('path');

const getFaqs = ()=>{
    const filePath = path.join(__dirname, '../data/faqs.json');
    const data = fs.readFileSync(filePath,'utf8');
    const parsedData = JSON.parse(data);
    return parsedData.faqs;
};

module.exports = { getFaqs };

