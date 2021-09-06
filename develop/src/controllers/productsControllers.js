const { products, categories } = require('../data/dataBase')


let subcategories = [];
products.forEach(product => {
    if(!subcategories.includes(product.subcategory)){
        subcategories.push(product.subcategory)
    }  
});

module.exports = {
    detail : (req, res) => {
        let productId = +req.params.id;
        let product = products.find(product => product.id === productId)
        res.render('products/productDetail', {
            title : 'Detalle de producto',
            product,
            categories,
            session: req.session
        })
    },
    category : (req, res) => {
        let category = categories.find(category => {
            return category.id === +req.params.id
        })
        let categoryProducts = products.filter(product => +product.category === +req.params.id)
        let subCategories = [];
        categoryProducts.forEach(product => {
            if(!subCategories.includes(product.subcategory)){
                subCategories.push(product.subcategory)
            }
        });
        res.render('products/categories', {
            title : `Categoria: ${category.name}`,
            category,
            products: categoryProducts,
            subCategories,
            categories,
            session: req.session
        })
    },
    cart : (req, res) => {
        res.render('products/shoppingCart', {
            title : 'Carrito',
            session: req.session
        })
    }
}