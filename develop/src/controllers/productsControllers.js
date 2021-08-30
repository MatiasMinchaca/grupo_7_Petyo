const { products, categories } = require('../data/dataBase')

module.exports = {
   
    detail : (req, res) => {
        res.render('products/productDetail', {
            title : 'Detalle de producto'
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
            categories
        })
    },
    cart : (req, res) => {
        res.render('products/shoppingCart', {
            title : 'Carrito'
        })
    }
}