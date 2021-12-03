const db = require('../database/models')
const {Op} = require('sequelize')

module.exports = {
    detail : (req, res) => {
        db.Product.findOne({
            where: {
                id: req.params.id
            },
            include: [
                {association: 'subcategory'}
            ]
        })
        .then(product => {
            db.Product.findAll({
                where: {
                    subcategoryId: product.subcategoryId
                },
            })
            .then(products => {
                let more = product.visited + 1
                db.Product.update({
                    visited: more
                },
                { where: {
                        id: req.params.id
                }
                })
                .then(() => {
                    res.render('products/productDetail', {
                        title : 'Detalle de producto',
                        product,
                        products,
                        session: req.session
                    })
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
                if(products.length > 0){
                    res.render('products/categories', {
                        title : `Categoria: ${category.name}`,
                        category,
                        products,
                        session: req.session
                    })
                }else {
                    res.render('products/error', {
                        title : `Auch`,
                        messageError: 'Aun no hay productos en esta seccion',
                        session: req.session
                    })
                }
                
            }else {
                res.render('products/error', {
                    title : `Error`,
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
                if(subcategory.products.length > 0){
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
                }else {
                    res.render('products/error', {
                        title : `Auch:()`,
                        messageError: 'Aun no hay productos en esta seccion',
                        session: req.session
                    })
                }
                
            } else {
                res.render('products/error', {
                    title : `Error`,
                    messageError: 'Lo que buscas no esta disponible en este momento',
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
                [Op.or]: [
                {
                    name: {
                        [Op.like]: `%${req.query.search}%`,
                    },
                },
                {
                    description: {
                        [Op.like]: `%${req.query.search}%`,
                    }
                }
                ]
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
                    search: `${results.length} resultados para ${req.query.search}`,
                    position: "",
                    products,
                    session: req.session,
                })
            })
        })
    }
}