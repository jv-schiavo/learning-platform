const { getInstructors } = require('../models/instructorsModel');

const showInstructors = (req, res) => {
  getInstructors((err, instructors) => {
    if (err) return res.status(500).send('Error loading instructors');
    res.render('pages/instructors', { instructors });
  });
};

module.exports = { showInstructors };