const { getContacts } = require('../models/contactModel');

const showContacts = (req,res) =>{
    const contacts = getContacts();
    res.render('/pages/contacts', { contacts });
};

module.exports = { showContacts };
