let express = require('express');
let router = express.Router();
let {detail, cart} = require('../controllers/productsControllers');

/* GET */
router.get('/detail', detail);
router.get('/cart', cart);

module.exports = router;
