let express = require('express');
let router = express.Router();
let {
    contactView
}= require('../controllers/contactController')


router.get('/', contactView)

module.exports = router;