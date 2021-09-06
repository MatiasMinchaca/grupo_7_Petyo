let express = require('express');
let router = express.Router();
let {login, procedureLogin, logout, register, procedureRegister, profile, editProfile, profileUpdate} = require('../controllers/usersControlles');
const loginValidator = require('../validations/loginValidator');
const registerValidator = require('../validations/registerValidator');
const uploadUserImage = require('../middlewares/uploadUserImage');
/* GET - LOGIN  */
router.get('/login', login);
router.post('/login', loginValidator, procedureLogin);
router.get('/logout', logout);
/* GET - LOGIN  */
router.get('/register', register);
router.post('/register', uploadUserImage.single('image'), registerValidator, procedureRegister);
/* GET - LOGIN  */
router.get('/profile', profile)
router.get('/profile/editProfile/:id', editProfile);
router.get('/profile/editProfile/:id', uploadUserImage.single('image'), profileUpdate);

module.exports = router;

