const fs = require('fs');
const path = require('path')

const getInstructors = () => {
    const filePath = path.join(__dirname, '../data/instructos.json');
    const data = fs.readFileSync(filePath,'utf8');
    return JSON.parse(data);
};

module.exports = { getInstructors };