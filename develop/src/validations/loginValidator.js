const { check, body } = require('express-validator')
const { users } = require('../data/dataBase')
let bcrypt = require('bcryptjs')

module.exports = [
    check('email')
    .notEmpty()
    .withMessage('Debes escribir tu Correo Electronico').bail()
    .isEmail()
    .withMessage('Debes escribir un Correo Electronico válido'),

    body('email')
    .custom(value => {
        let user = users.find(user => user.email === value)

        if(user !== undefined){
            return true
        }else{
            return false
        }
    })
    .withMessage("No hay ninguna cuenta asociada a ese correo electronico"),

    check('pass')
    .notEmpty()
    .withMessage('Debes escribir tu contraseña'),

    body('pass')
    .custom((value, {req}) => {
        let user = users.find(user => user.email === req.body.email)
        return bcrypt.compareSync(value, user.pass)
    })
    .withMessage('Contraseña incorrecta')
]