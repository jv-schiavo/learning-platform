const fs = require('fs');
const path = require('path');

const getCourses = () => {
    const filePath = path.join(__dirname, '../data/courses.json');
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
};

module.export = { getCourses };