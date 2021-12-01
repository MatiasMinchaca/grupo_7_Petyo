let express = require('express');
let router = express.Router();
let {detail, 
    category, 
    subcategory, 
    cart, 
    search} = require('../controllers/productsControllers');

/* GET - Muestra vista de detalles de un producto por su id*/
router.get('/detail/:id', detail);
/* GET - Muestra vista de los productos por su catgoria*/
router.get('/category/:id', category);
/* GET - Muestra vista de los productos por su subcatgoria*/
router.get('/subcategory/:id', subcategory);
/* GET - Muestra vista Busqueda*/
router.get('/search', search);
/* GET - Muestra vista de carrito de compras */
router.get('/cart', cart);

module.exports = router;
