let express = require('express');
let router = express.Router();
let {login, procedureLogin, logout, register, procedureRegister, profile, editProfile, profileUpdate} = require('../controllers/usersControlles');
const loginValidator = require('../validations/loginValidator');
const registerValidator = require('../validations/registerValidator');
const editProfileValidator = require('../validations/editProfileValidator');
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
router.put('/profile/editProfile/:id', uploadUserImage.single('image'),editProfileValidator, profileUpdate);

module.exports = router;

