let express = require('express');
let router = express.Router();
let {login, confirmation, register} = require('../controllers/usersControlles');

/* GET */
router.get('/login', login);
router.get('/login/confirmation', confirmation);
router.get('/register', register);

module.exports = router;

