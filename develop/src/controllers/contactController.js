const { validationResult } = require('express-validator');
let bcrypt = require('bcryptjs');
const db = require('../database/models');

module.exports = {
    contactView: (req, res) => {
        res.render('contact', {
            tittle: 'Contactanos',
            session: req.session
        })
    }
}