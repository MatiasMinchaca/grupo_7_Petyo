let { check } = require('express-validator');
module.exports = [
    check('name')
    .notEmpty()
    .withMessage("El campo no puede ir vacío")

]