let express = require('express');
let router = express.Router();
let {admin,
    products, 
    load,
    store,  
    edit, 
    remove,
    update} = require('../controllers/adminController');
let loadProductFile = require('../middlewares/loadProductsFile')

/* GET - Muestra el inicio de la vista de admin*/
router.get('/', admin);
/* GET - muestra todos los productos de la base de datos*/
router.get('/products', products);
/* GET - muestra la vista para agregar un producto*/
router.get('/products/loadProduct', load);
router.post('/products/loadProduct', loadProductFile.single("image"),store);
/* GET - Muestra la vista de editar productos */
router.get('/products/edit/:id', edit);
router.put('/products/edit/:id', loadProductFile.single("image"), update);
router.delete('/products/delete/:id', remove);

module.exports = router;
