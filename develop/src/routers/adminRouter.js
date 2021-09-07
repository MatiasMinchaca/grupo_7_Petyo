let express = require('express');
let router = express.Router();
let {admin,
    products, 
    load,
    store,  
    edit, 
    remove,
    update} = require('../controllers/adminController');
let loadProductFile = require('../middlewares/loadProductsFile');
let productValidator = require('../validations/productValidator');
let sessionAdminCheck = require('../middlewares/sessionAdminCheck')
/* GET - Muestra el inicio de la vista de admin*/
router.get('/', sessionAdminCheck, admin);
/* GET - muestra todos los productos de la base de datos*/
router.get('/products', sessionAdminCheck, products);
/* GET - muestra la vista para agregar un producto*/
router.get('/products/load', sessionAdminCheck, load);
router.post('/products/load', loadProductFile.single("image"),productValidator,store);
/* GET - Muestra la vista de editar productos */
router.get('/products/edit/:id', sessionAdminCheck, edit);
router.put('/products/edit/:id', loadProductFile.single("image"),productValidator, update);
router.delete('/products/delete/:id', remove);

module.exports = router;
