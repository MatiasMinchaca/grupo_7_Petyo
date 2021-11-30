let express = require('express');
let router = express.Router();
let {aboutus, community, feeding, frequentquestions, termsandConditions, privacypolicy} = require('../controllers/otroController');

router.get('/aboutus', aboutus);

router.get('/community', community);

router.get('/feeding', feeding);

router.get('/frequentquestions', frequentquestions);

router.get('/termsandConditions', termsandConditions);

router.get('/privacypolicy', privacypolicy);

module.exports = router;