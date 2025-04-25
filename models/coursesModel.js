const fs = require('fs');
const path = require('path');

const getCourses = () => {
    const filePath = path.join(__dirname, '../data/courses.json');
    const data = fs.readFileSync(filePath, 'utf8');
    const parsedData = JSON.parse(data);
    return parsedData.courses;
};

module.exports = { getCourses };