const { getCourses } = require('../models/coursesModel');

const showCourses = (req,res) =>{
    const courses = getCourses();
    res.render('pages/courses', { courses });
};

module.exports = { showCourses };