const { check, body } = require('express-validator')
const { users } = require('../data/dataBase')

module.exports = [
    check('name')
    .isAlpha('es-ES')
    .notEmpty()
    .isLength({
        min: 2,
        max: 15
    })
    .withMessage('Debes escribir un nombre')
    ,

    check('lastName').isAlpha('es-ES')
    .notEmpty()
    .isLength({
        min: 2,
        max: 15
    })
    .withMessage('Debes escribir un apellido')
    ,

    check('email')
    .notEmpty()
    .withMessage('Debes escribir un correo electronico').bail()
    .isEmail()
    .withMessage('Debes escribir un correo electronico válido')
    ,

    body('email')
    .custom(value => {
        let user = users.find(user => user.email === value)

        if(user === undefined){
            return true
        }else{
            return false
        }
    })
    .isLength({
        max: 30
    })
    .withMessage("Email ya registrado")
    ,

    check('telephone')
    .isNumeric()
    .notEmpty()
    .isLength({
        min: 8,
        max: 15
    })
    .withMessage('Debes escribir un telefono')
    ,

    check('namePet')
    .isAlpha('es-ES')
    .notEmpty()
    .isLength({
        min: 2,
        max: 15
    })
    .withMessage('Debes escribir el nombre de su mascota')
    ,

    check('street')
    .isAlphanumeric('es-ES')
    .notEmpty()
    .isLength({
        max: 30
    })
    .withMessage('Debes escribir una calle')
    ,

    check('postalCode')
    .isNumeric()
    .notEmpty()
    .isLength({
        max: 8
    })
    .withMessage('Debes escribir un codigo postal')
    ,

    check('biography')
    .isAlphanumeric('es-ES')
    .notEmpty()
    .isLength({
        min: 25,
        max:500
    })
    .withMessage('Debes escribir una biografia')
    ,

    check('pass')
    .notEmpty()
    .withMessage('Debes escribir tu contraseña')
    .isLength({
        min: 8,
        max: 12
    })
    .withMessage('La contraseña debe tener como mínimo 8 caracteres')
    ,

    body('pass2')
    .custom((value, {req}) => value !== req.body.pass ? false : true)
    .withMessage('Las contraseñas no coinciden'),
]