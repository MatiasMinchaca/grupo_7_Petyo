let { check } = require('express-validator');
module.exports = [
    check('name')
    .notEmpty()
    .withMessage("El campo nombre no puede ir vacío")
    .isLength({ min: 5 })
    .withMessage("Ingrese más de 5 carácteres"),

    check('subcategory')
    .notEmpty()
    .withMessage("Debes elegir una subcategoría"),

    check('price')
    .notEmpty()
    .withMessage("Coloca un precio para el producto")
    .isNumeric()
    .withMessage("Solo puedes ingresar números"),

    check('description')
    .notEmpty()
    .withMessage("El campo descripción no puede ir vacío")
    .isLength({ min: 30 })
    .withMessage("Ingrese más de 30 carácteres")
    
]