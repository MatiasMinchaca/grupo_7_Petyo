let express = require('express');
let router = express.Router();
let {aboutus, community, feeding, frequentquestions} = require('../controllers/otroController');

router.get('/aboutus', aboutus);

router.get('/community', community);

router.get('/feeding', feeding)

router.get('/frequentquestions', frequentquestions)

module.exports = router;