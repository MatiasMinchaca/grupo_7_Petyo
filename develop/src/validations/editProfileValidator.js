const { check, body } = require('express-validator')

module.exports = [
    check('name')
    .notEmpty()
    .withMessage('Debes escribir un nombre').bail()
    .isAlpha('es-ES')
    .withMessage('No se admiten caracteres especiales ni numeros')
    .isLength({
        min: 2,
        max: 15
    })
    .withMessage('Minimo 2 carcteres y maximo 15'),

    check('lastName')
    .notEmpty()
    .withMessage('Debes escribir un apellido').bail()
    .isAlpha('es-ES')
    .withMessage('No se admiten caracteres especiales ni numeros')
    .isLength({
        min: 2,
        max: 15
    })
    .withMessage('Minimo 2 carcteres y maximo 15'),

    check('email')
    .notEmpty()
    .withMessage('Debes escribir un correo electronico').bail()
    .isEmail()
    .withMessage('Debes escribir un correo electronico válido'),

    check('telephone')
    .isNumeric()
    .notEmpty()
    .withMessage('Debes escribir un telefono').bail()
]
