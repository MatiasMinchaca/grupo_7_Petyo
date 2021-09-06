const { check, body } = require('express-validator')
const { users } = require('../data/dataBase')

module.exports = [
    check('name')
    .notEmpty()
    .withMessage('Debes escribir tu/s Nombre/s'),

    check('last_name')
    .notEmpty()
    .withMessage('Debes escribir tu/s Apellido/s'),

    check('email')
    .notEmpty()
    .withMessage('Debes escribir tu Correo Electronico').bail()
    .isEmail()
    .withMessage('Debes escribir un Correo Elctronico válido'),

    body('email')
    .custom(value => {
        let user = users.find(user => user.email === value)

        if(user === undefined){
            return true
        }else{
            return false
        }
    })
    .withMessage("Correo Electronico ya registrado"),

    check('pass')
    .notEmpty()
    .withMessage('Debes escribir una contraseña')
    .isLength({
        min: 8
    })
    .withMessage('La contraseña debe tener como mínimo 8 caracteres'),

    body('passC')
    .custom((value, {req}) => value !== req.body.pass ? false : true)
    .withMessage('Las contraseñas no coinciden'),

    check('terms')
    .isString('on')
    .withMessage('Debes aceptar los términos y condiciones')
]