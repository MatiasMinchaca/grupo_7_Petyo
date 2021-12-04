let express = require('express');
let router = express.Router();
let {home} = require('../controllers/homeController');
let cookieCheck = require('../middlewares/cookieCheck')

/* GET */
router.get('/', cookieCheck, home)

module.exports = router;