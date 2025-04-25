const { getCourses } = require('../models/coursesModel');
const { getInstructors } = require('../models/instructorsModel');
const { getLiveEvents } = require('../models/liveEventsModel');
const { getFaqs } = require('../models/faqsModel');
const { getContacts } = require('../models/contactModel');

const showHome = (req,res) =>{
    const courses = getCourses().slice(0,3);
    const instructors = getInstructors().slice(0,2);
    const liveEvents = getLiveEvents().slice(0,1);
    const faqs = getFaqs().slice(0,4);
    const contact = getContacts();

res.render('pages/home', { courses, instructors, liveEvents, faqs, contact});
};

module.exports = { showHome };