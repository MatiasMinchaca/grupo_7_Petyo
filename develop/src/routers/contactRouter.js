let express = require('express');
let router = express.Router();
let {
    contactView,
    contact
}= require('../controllers/contactController')
let loadImageContact = require('../middlewares/loadImageContact');
let contactValidador = require('../validations/contactValidator');

router.get('/', contactView)
router.post('/', loadImageContact.single("image"), contactValidador, contact)

module.exports = router;