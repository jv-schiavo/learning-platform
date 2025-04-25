const fs = require('fs');
const path = require('path')

const getInstructors = () => {
    const filePath = path.join(__dirname, '../data/instructors.json');
    const data = fs.readFileSync(filePath,'utf8');
    const parsedData = JSON.parse(data);
    return parsedData.instructors;
};

module.exports = { getInstructors };