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

          // Random 3 instructors
          const shuffledInstructors = instructors.sort(() => 0.5 - Math.random());
          const selectedInstructors = shuffledInstructors.slice(0, 3);

          // Next 3 upcoming events (assuming .date is a Date object)
          const upcomingEvents = liveEvents
            .filter(event => new Date(event.date) >= new Date())
            .sort((a, b) => new Date(a.date) - new Date(b.date))
            .slice(0, 3);

          // 📌 Slice 3 FAQs
          const selectedFaqs = faqs.slice(0, 3);

          res.render('pages/home', {
            courses, // all courses
            instructors: selectedInstructors,
            liveEvents: upcomingEvents,
            faqs: selectedFaqs
          });
        });
      });
    });
  });
};

module.exports = { showHome };