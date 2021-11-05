const { check, body } = require('express-validator')
const db = require('../database/models')

module.exports = [
    check('name').isAlpha('es-ES')
    .notEmpty()
    .withMessage('Debes escribir tu/s Nombre/s')
    .isLength({
        min: 2,
        max: 15
    })
    ,

    check('lastName').isAlpha('es-ES')
    .notEmpty()
    .withMessage('Debes escribir tu/s Apellido/s')
    .isLength({
        min: 2,
        max: 15
    })
    ,

    check('email')
    .notEmpty()
    .withMessage('Debes escribir tu Correo Electronico').bail()
    .isEmail()
    .withMessage('Debes escribir un Correo Elctronico válido')
    ,

    body('email')
    .custom(value => {
        return db.User.findOne({
            where: {
                email : value
            }
        })
        .then(user => {
            if(user){
                return Promise.reject("Correo electronico ya existente")
            }
        })
    }),
    check('password')
    .notEmpty()
    .withMessage('Debes escribir una contraseña')
    .isLength({
        min: 8,
        max: 12
    })
    .withMessage('La contraseña debe tener como mínimo 8 caracteres'),

    body('passC')
    .custom((value, {req}) => value !== req.body.password ? false : true)
    .withMessage('Las contraseñas no coinciden'),

    check('terms')
    .isString('on')
    .withMessage('Debes aceptar los términos y condiciones')
]
