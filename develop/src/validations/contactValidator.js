let { check } = require('express-validator');
module.exports = [
    check('country')
    .notEmpty()
    .withMessage("El campo no puede ir vacío"),

    check('language')
    .notEmpty()
    .withMessage("El campo no puede ir vacío"),

    check('message')
    .notEmpty()
    .withMessage("El campo no puede ir vacío"),

    check('name')
    .notEmpty()
    .withMessage("El campo no puede ir vacío"),

    check('lastName')
    .notEmpty()
    .withMessage("El campo no puede ir vacío"),

    check('email')
    .notEmpty()
    .withMessage("El campo no puede ir vacío"),

    check('terms')
    .isString('on')
    .withMessage('Debes aceptar la Politica de privacidad')
]