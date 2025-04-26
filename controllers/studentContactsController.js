const { insertStudentContacts } = require('../models/studentContactModel');

// Show the contact page
function showContactPage(req, res) {
    res.render('pages/contact', { query: req.query });
}

// Handle form submission
function submitContactForm(req, res) {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
        return res.status(400).send("Please fill all the fields");
    }

    insertStudentContacts(name, email, subject, message, (err) => {
        if (err) {
            res.status(500).send('Error saving your message. Try again!');
        } else {
            res.redirect('/contact?success=true');
        }
    });
}

module.exports = {
    showContactPage,
    submitContactForm
};
