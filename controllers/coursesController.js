const { getCourses } = require('../models/coursesModel');
const { getFilteredCourses } = require('../models/coursesModel');

const showCourses = (req, res) => {
  getCourses((err, courses) => {
    if (err) return res.status(500).send('Error loading courses');
    res.render('pages/courses', { courses });
  });
};


const apiGetCourses = (req, res) => {
  const topicId = req.query.topic;
  getFilteredCourses(topicId, (err, courses) => {
    if (err) return res.status(500).json({ error: "Failed to load courses" });
    res.json(courses);
  });
};

module.exports = {
  showCourses,
  apiGetCourses
};
