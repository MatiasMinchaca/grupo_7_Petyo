let express = require('express');
let router = express.Router();
let {login, 
    procedureLogin, 
    logout, 
    register, 
    procedureRegister, 
    profile, 
    editProfile, 
    profileUpdate,
    addAddressView, 
    editAddress, 
    editAddressView, 
    addAddress, 
    removeAddress,
    cart} = require('../controllers/usersControlles');
const loginValidator = require('../validations/loginValidator');
const registerValidator = require('../validations/registerValidator');
const editProfileValidator = require('../validations/editProfileValidator');
const addAddrressValidator = require('../validations/addAddressValidator');
const editAddrressValidator = require('../validations/addAddressValidator');
const uploadUserImage = require('../middlewares/uploadUserImage');
const sessionUserCheck = require('../middlewares/sessionUserCheck');
const sessionLoginCheck = require('../middlewares/sessionLoginCheck');
/* GET - LOGIN  */
router.get('/login', sessionLoginCheck, login);
router.post('/login', loginValidator, procedureLogin);
router.get('/logout', sessionUserCheck, logout);
/* GET - LOGIN  */
router.get('/register', sessionLoginCheck, register);
router.post('/register', uploadUserImage.single('image'), registerValidator, procedureRegister);
/* GET - LOGIN  */
router.get('/profile', sessionUserCheck, profile)
router.get('/profile/editProfile/:id', sessionUserCheck, editProfile);
router.put('/profile/editProfile/:id', uploadUserImage.single('image'), editProfileValidator, profileUpdate);
/* ADDRESS */
router.get('/profile/addAddress/:id', sessionUserCheck, addAddressView)
router.post('/profile/addAddress/:id', sessionUserCheck, addAddrressValidator, addAddress)
router.get('/profile/editAddress/:id', sessionUserCheck, editAddressView)
router.put('/profile/editAddress/:id', sessionUserCheck, editAddrressValidator, editAddress)
router.delete('/profile/removeAddress/:id', sessionUserCheck, removeAddress)
/* GET - Muestra vista de carrito de compras */
router.get('/cart', cart);
module.exports = router;

