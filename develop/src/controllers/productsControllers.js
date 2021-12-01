const db = require('../database/models')
const {Op} = require('sequelize')

module.exports = {
    detail : (req, res) => {
        db.Product.findOne({
            where: {
                id: req.params.id
            },
        })
        .then(product => {
            db.Product.findAll({
                where: {
                    subcategoryId: product.subcategoryId
                },
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
    },
    category : (req, res) => {
        db.Category.findOne({
            where: {
                id: req.params.id
            },
            include: [{
                association: "subcategories",
                include: [{
                    association: "products",
                }]
            }] 
        })
        .then(category => {
            if(category != null){
                let subcategories = category.subcategories;
                let products = []
                subcategories.forEach(subcategory => {
                    subcategory.products.forEach(product => products.push(product))
                })
                res.render('products/categories', {
                    title : `Categoria: ${category.name}`,
                    category,
                    products,
                    session: req.session
                })
            }else {
                res.render('products/error', {
                    title : `Subcategoria: `,
                    messageError: 'Lo que buscas no esta disponible en este momento',
                    session: req.session
                })
            }
            
        })
    },
    subcategory : (req, res) => {
        db.Subcategory.findOne({
            where: {
                id: req.params.id
            },
            include: [{
                association: "category"
            },
            {
                association: 'products'
            }] 
        })
        .then(subcategory => {
            if(subcategory != null){
                let products = []
                subcategory.products.forEach(product => {
                    products.push(product)
                })
                res.render('products/subcategories', {
                    title : `Categoria: ${subcategory.name}`,
                    subcategory,
                    products,
                    session: req.session
                })
            } else {
                res.render('products/error', {
                    title : `Subcategoria: `,
                    messageError: 'Lo que buscas no esta aqui en este momento',
                    session: req.session
                })
            }
        })
    },
    cart : (req, res) => {
        res.render('products/shoppingCart', {
            title : 'Carrito',
            session: req.session
        })
    },
    search: (req, res) => {
        db.Product.findAll({
            where: {
                name: {
                    [Op.like]: `%_${req.query.search}_%`,
                },
            },
            include: [
                { association: "subcategory",
                include: [
                    {association: 'category'}
                ]
                }
            ]
        }).then(results => {
            db.Product.findAll({
                include: [
                    { association: "subcategory",
                    include: [
                        {association: 'category'}
                    ]
                    }
                ]
            }).then(products => {
                res.render("products/searchProducts", {
                    products,
                    results,
                    title: `(${results.length}) ${req.query.search} | Petyo`,
                    search: req.query.search,
                    position: "",
                    products,
                    session: req.session,
                })
            })
        })
    }
}