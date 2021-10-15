const { products, categories } = require('../data/dataBase')
const db = require('../database/models')


let subcategories = [];
products.forEach(product => {
    if(!subcategories.includes(product.subcategory)){
        subcategories.push(product.subcategory)
    }  
});

module.exports = {
    detail : (req, res) => {
        db.Product.findOne({
            where: {
                id: req.params.id
            },
            include: [{
                association: "images"
            }]
        })
        .then(product => {
            db.Product.findAll({
                where: {
                    subcategoryId: product.subcategoryId
                },
                include: [{
                    association: "images"
                }]
            })
            .then(products => {
                res.render('products/productDetail', {
                    title : 'Detalle de producto',
                    product,
                    session: req.session
                })
            })
        })
        .catch(err => console.log)
        /*let productId = +req.params.id;
        let product = products.find(product => product.id === productId)
        res.render('products/productDetail', {
            title : 'Detalle de producto',
            product,
            categories,
            session: req.session
        })*/
    },
    category : (req, res) => {
        db.Category.findOne({
            where: {
                id: req.params.id
            },
            include: [{
                association: "subcategory",
                include: [{
                    association: "products",
                    include: [{
                        association: "images",
                    }]
                }] 
            }] 
        })
        .then(category => {
            let subcategories = category.subcategories;
            let products = []
        })
        /*let category = categories.find(category => {
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
        })*/
    },
    cart : (req, res) => {
        res.render('products/shoppingCart', {
            title : 'Carrito',
            session: req.session
        })
    }
}