let express = require('express');
let router = express.Router();
let {home} = require('../controllers/homeController');  /*Requiero el controlador */

/* GET */
router.get('/', home)

module.exports = router;