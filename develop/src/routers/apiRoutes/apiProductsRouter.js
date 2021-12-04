const express = require('express');
const router = express.Router();
const {categories, subcategories} = require ('../../controllers/apiControllers/apiSubcategoryController');

router.get('/:category/subcategories', subcategories);


module.exports = router;