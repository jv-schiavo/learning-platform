const { getFaqs } = require('../models/faqsModel');

const showFaqs = (req,res) =>{
    const faqs = getFaqs();
    res.render('pages/faqs', { faqs });
};

module.exports = { showFaqs };
