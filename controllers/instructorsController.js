const { getInstructors } = require('../models/instructorsModel');

const showInstructors = (req,res) =>{
    const instructors = getInstructors();
    res.render('pages/instructors', { instructors });
};

module.exports = { showInstructors };