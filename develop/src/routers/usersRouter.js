let express = require('express');
let router = express.Router();
let {login, confirmation, register, editProfile} = require('../controllers/usersControlles');

/* GET */
router.get('/login', login);
router.get('/login/confirmation', confirmation);
router.get('/register', register);
router.get('/editProfile', editProfile);

module.exports = router;

