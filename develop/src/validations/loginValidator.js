const { check, body } = require('express-validator')
let bcrypt = require('bcryptjs')
const db = require('../database/models')

module.exports = [
    check('email')
    .notEmpty()
    .withMessage('Debes escribir tu Correo Electronico').bail()
    .isEmail()
    .withMessage('Debes escribir un Correo Electronico válido'),

    body('custom')
    .custom((value, {req}) => { 
        return db.User.findOne({
            where: {
                email: req.body.email
            }
        })
        .then(user =>{
            return user
        }).catch(error =>{
            return Promise.reject('Datos invalidos')
        })
    }),
    body('password')
    .custom((value, {req}) => { 
        return db.User.findOne({
            where: {
                email: req.body.email
            }
        })
        .then(user =>{
            return bcrypt.compareSync(req.body.password, user.dataValues.password)
        }).catch(error =>{
            return Promise.reject('Datos invalidos')
        })
    })
]