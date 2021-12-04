let express = require('express');
let router = express.Router();
let {admin,
    products,
    searchAdmin,
    load,
    store,  
    edit, 
    remove,
    update,
    usersView,
    userChangeAdmin,
    adminChangeUser} = require('../controllers/adminController');
let {
    categoriesListView,
    categoryEditView,
    categoryEdit,
    categoryLoadView,
    categoryLoad,
    categoryRemove} = require('../controllers/categoriesController');
let {
    subcategoriesListView,
    subcategoryEditView,
    subcategoryLoadView,
    subcategoryLoad,
    subcategoryEdit,
    subcategoryRemove} = require('../controllers/subcategoriesController');
let loadProductFile = require('../middlewares/loadProductsFile');
let loadCategoryFile = require('../middlewares/loadCategoryFile');
let productValidator = require('../validations/productValidator');
let categoryValidator = require('../validations/categoryValidator');
let subcategoryValidator = require('../validations/subcategoryValidator');
let sessionAdminCheck = require('../middlewares/sessionAdminCheck')
let superAdminCheck = require('../middlewares/superAdminCheck')
/* GET - Muestra el inicio de la vista de admin*/
router.get('/', sessionAdminCheck, admin);
/* GET - muestra todos los productos de la base de datos*/
router.get('/products', sessionAdminCheck, products);
/* GET - muestra la busqueda en el admin*/
router.get('/search', sessionAdminCheck, searchAdmin);
/* GET - muestra la vista para agregar un producto*/
router.get('/products/load', sessionAdminCheck, load);
/* POST - Productos */
router.post('/products/load', loadProductFile.single("image"), productValidator,store);
/* GET - Muestra la vista de editar productos */
router.get('/products/edit/:id', sessionAdminCheck, edit);
/* PUT - Productos */
router.put('/products/edit/:id', loadProductFile.single("image"), productValidator, update);
/* DELETE - Productos */
router.delete('/products/delete/:id', remove);
/* GET - Categorias */
router.get('/categories', sessionAdminCheck, categoriesListView)
router.get('/categories/edit/:id', sessionAdminCheck, categoryEditView)
router.get('/categories/load', sessionAdminCheck, categoryLoadView)
/* POST- Categorias */
router.post('/categories/load', loadCategoryFile.single('image'), categoryValidator, categoryLoad)
/* PUT- Categorias */
router.put('/categories/edit/:id', loadCategoryFile.single('image'), categoryValidator, categoryEdit)
/* DELETE- Categorias */
router.delete('/categories/delete/:id', categoryRemove)
/* GET - Subcategorias */
router.get('/subcategories', sessionAdminCheck, subcategoriesListView)
router.get('/subcategories/edit/:id', sessionAdminCheck, subcategoryEditView)
router.get('/subcategories/load', sessionAdminCheck, subcategoryLoadView)
/* POST - Subcategorias */
router.post('/subcategories/load', subcategoryValidator, subcategoryLoad)
/* PUT - Subcategorias */
router.put('/subcategories/edit/:id', subcategoryValidator, subcategoryEdit)
/* DELETE - Subcategorias */
router.delete('/subcategories/delete/:id', subcategoryRemove)
/* GET - Usuarios */
router.get('/users/', superAdminCheck, usersView)
/* PUT - Usuarios */
router.put('/users/rolAdmin/:id', superAdminCheck, userChangeAdmin)
router.put('/users/rolUser/:id', superAdminCheck,adminChangeUser)
/* DELETE - Usuarios */
router.delete('/users/delelte/:id', superAdminCheck,usersView)
module.exports = router;
