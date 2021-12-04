const express = require('express');
const router = express.Router();
const {categories, subcategories} = require ('../../controllers/apiControllers/apiSubcategoryController');

router.get('/', categories);


module.exports = router;