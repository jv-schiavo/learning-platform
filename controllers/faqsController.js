const { getFaqs } = require('../models/faqsModel');

const showFaqs = (req, res) => {
  getFaqs((err, faqs) => {
    if (err) return res.status(500).send('Error loading instructors');
    res.render('pages/faq', { faqs });
  });
};

module.exports = { showFaqs };
