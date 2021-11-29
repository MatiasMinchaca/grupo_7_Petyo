const fs = require('fs');

module.exports = {
    aboutus: (req, res) => {
        res.render('otro/aboutus', {
            title : '¿Quienes somos?',
            session: req.session
        })
    },
    community: (req, res) => {
        res.render('otro/community', {
            title : 'Comunidad',
            session: req.session
        })
    },
    feeding: (req, res) => {
        res.render('otro/feeding', {
            title : 'Alimentación',
            session: req.session
        })
    },
    frequentquestions: (req, res) => {
        res.render('otro/frequentquestions', {
            title : 'Preguntas frecuentes',
            session: req.session
        })
    }
}