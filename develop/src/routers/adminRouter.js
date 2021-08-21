let express = require('express');
let router = express.Router();
let {admin, load, products, remove} = require('../controllers/adminController');

/* GET - Muestra el inicio de la vista de admin*/
router.get('/', admin);
/* GET - muestra todos los productos de la base de datos*/
router.get('/products', products);
/* GET - muestra la vista para agregar un producto*/
router.get('/loadProduct', load);


module.exports = router;
