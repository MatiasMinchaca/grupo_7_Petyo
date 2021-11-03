let { check } = require('express-validator');
module.exports = [
    check('name').isAlphanumeric('es-ES')
    .notEmpty()
    .withMessage("El campo nombre no puede ir vacío")
    .isLength({ min: 5, max: 30 })
    .withMessage("Ingrese más de 5 carácteres")
    ,

    check('subcategory')
    .notEmpty()
    .withMessage("Debes elegir una subcategoría")
    //validacion
    ,

    check('price')
    .notEmpty()
    .withMessage("Coloca un precio para el producto")
    .isLength({ min: 5, max: 11 })
    .isNumeric()
    .withMessage("Solo puedes ingresar números")
    ,

    check('discount')
    .notEmpty()
    .isLength({ min: 1, max: 11 })
    .isNumeric()
    .withMessage("Solo puedes ingresar números")
    ,

    check('description')
    .notEmpty()
    .withMessage("El campo descripción no puede ir vacío")
    .isLength({ min: 20, max: 500 })
    .withMessage("Ingrese más de 30 carácteres")
    ,
    
]