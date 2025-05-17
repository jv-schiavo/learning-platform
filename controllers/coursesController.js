const { getCourses } = require('../models/coursesModel');

const showCourses = (req, res) => {
  getCourses((err, courses) => {
    if (err) return res.status(500).send('Error loading instructors');
    res.render('pages/courses', { courses });
  });
};
module.exports = { showCourses };