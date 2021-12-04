let { check } = require('express-validator');
module.exports = [
    check('street')
    .notEmpty()
    .withMessage("El campo nombre no puede ir vacío"),

    check('number')
    .notEmpty()
    .withMessage("Escribe tu numero")
    .isNumeric()
    .withMessage("Solo puedes ingresar números"),

    check('postalCode')
    .notEmpty()
    .withMessage("Debes escribir tu codigo postal")
    .isNumeric()
    .withMessage("Solo puedes ingresar números"),
    
]