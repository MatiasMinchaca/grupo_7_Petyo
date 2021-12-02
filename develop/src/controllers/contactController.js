const { validationResult } = require('express-validator');
let bcrypt = require('bcryptjs');
const db = require('../database/models');

module.exports = {
    contactView: (req, res) => {
        res.render('contact', {
            tittle: 'Contactanos',
            session: req.session
        })
    },
    contact: (req, res) => {
        let errors = validationResult(req);
        if(errors.isEmpty()){
            let {
                country,
                language,
                message,
                name,
                lastName,
                email,
                address,
                city,
                postalCode,
                contact
            }= req.body
            db.Contact.create({
                country,
                language,
                message,
                image: req.file ? req.file.filename : '',
                name,
                lastName,
                email,
                address,
                city,
                postalCode,
                contact
            })
            .then(() => {
                res.redirect('/')
            })
        }else {
            res.render('contact', {
                tittle: 'Contactanos',
                old: req.body,
                errors: errors.mapped(),
                session: req.session
            })
        }
    }
}