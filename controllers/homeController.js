const { getCourses } = require('../models/coursesModel');
const { getInstructors } = require('../models/instructorsModel');
const { getLiveEvents } = require('../models/liveEventsModel');
const { getFaqs } = require('../models/faqsModel');

const showHome = (req, res) => {
  getCourses((err, courses) => {
    if (err) return res.status(500).send('Error fetching courses');

    getInstructors((err, instructors) => {
      if (err) return res.status(500).send('Error fetching instructors');

      getLiveEvents((err, liveEvents) => {
        if (err) return res.status(500).send('Error fetching live events');

        getFaqs((err, faqs) => {
          if (err) return res.status(500).send('Error fetching FAQs');

          res.render('pages/home', {
            courses: courses.slice(0, 3),
            instructors: instructors.slice(0, 2),
            liveEvents: liveEvents.slice(0, 1),
            faqs: faqs.slice(0, 4)
          });
        });
      });
    });
  });
};

module.exports = { showHome };
