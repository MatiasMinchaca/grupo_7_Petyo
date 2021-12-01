let { check } = require('express-validator');
module.exports = [
    check('name')
    .notEmpty()
    .withMessage("El campo no puede ir vacío")
    .isLength({ min: 5 })
    .withMessage("Ingrese más de 5 carácteres")

]