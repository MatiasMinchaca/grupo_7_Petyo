const { validationResult } = require('express-validator');
const fs = require('fs')
const db = require('../database/models')
const { Op } = require('sequelize')

module.exports = {
    admin: (req, res) => {
        let products = []
        let users = []
        let categories = []
        let subcategories = []
        db.Product.findAll()
        .then(product => {
            db.User.findAll()
            .then(user => {
                db.Category.findAll()
                .then(category => {
                    db.Subcategory.findAll()
                    .then(subcategory => {
                        product.forEach(element => {
                            products.push(element)
                        });
                        category.forEach(elements => {
                            categories.push(elements)
                        });
                        user.forEach(elementss => {
                            users.push(elementss)
                        });
                        subcategory.forEach(elementsss => {
                            subcategories.push(elementsss)
                        });
                        res.render('admin/adminDashboard', {
                            title : 'Administrador',
                            session: req.session,
                            products: products.length,
                            users: users.length,
                            categories: categories.length,
                            subcategories: subcategories.length
                        })
                    })
                })
            })
        })
        
    },
    products: (req, res) => {
        db.Product.findAll({
            include: [
                {association: 'subcategory',
                    include: [
                        {association: 'category'}
                    ]
                }
            ]
        })
        .then(products => {
            res.render('admin/adminListProducts', {
                title : 'Lista de productos',
                products,
                session: req.session
            })
        })
    },
    searchAdmin: (req, res) => {
        db.Product.findAll({
            include: [
                {association: 'subcategory',
                    include: [{association: 'category'}]}
            ],
            where: {
                [Op.or]: [
                    {
                        name: {
                            [Op.like]: `%${req.query.searchAdmin}%`
                        }
                    },
                    {
                        description: {
                            [Op.like]: `%${req.query.searchAdmin}%`
                        }
                    },
                    {
                        price: {
                            [Op.like]: `%${req.query.searchAdmin}%`
                        }
                    },
                    {
                        id: {
                            [Op.like]: `%${req.query.searchAdmin}%`
                        }
                    }
                ]
            }
        }) 
        .then(product => {
            res.render('admin/searchAdmin',{
                title : `Tu busqued: ${req.query.searchAdmin}`,
                product,
                search: req.query.searchAdmin,
                session: req.session
            })  
        })
    },
    load : (req, res) => {
        const categoriesPromise = db.Category.findAll();
        const subcategoriesPromise = db.Subcategory.findAll();
        Promise.all([categoriesPromise, subcategoriesPromise])
        .then(([categories, subcategories]) => {
            res.render('admin/adminLoadProduct', {
                title : 'Cargar Producto',
                categories,
                subcategories,
                session: req.session
            })
        })
    },
    store: (req, res) => {
        let errors = validationResult(req)

        if (errors.isEmpty()) {
            let { name, 
                price, 
                discount, 
                category,
                shipping,
                subcategoryId, 
                description 
            } = req.body;
            db.Product.create({
                name,
                price, 
                discount, 
                category,
                shipping: shipping > 0 ? shipping : 0,
                subcategoryId, 
                description,
                image: req.file ? req.file.filename : 'defaultImage.png'
            })
            .then(() => {
                res.redirect('/admin/products')
            }).catch(err => console.log(err))
        } else {
            const categoriesPromise = db.Category.findAll();
            const subcategoriesPromise = db.Subcategory.findAll();
            Promise.all([categoriesPromise, subcategoriesPromise])
            .then(([categories, subcategories]) => {
                res.render('admin/adminLoadProduct', {
                    title : 'Cargar Producto',
                    errors: errors.mapped(),
                    old: req.body,
                    categories, 
                    subcategories,
                    session: req.session
                })
            })
        }
    },
    edit: (req, res) => {
        const categoriesPromise = db.Category.findAll();
        const subcategoriesPromise = db.Subcategory.findAll();
        Promise.all([categoriesPromise, subcategoriesPromise])
        .then(([categories, subcategories]) => {
            db.Product.findOne({
            where: {
                id: req.params.id
            },
            include: [
                {association: 'subcategory',
                include: [
                    {association: 'category'}
                ]
                }
            ]
        })
        .then(product => {
            res.render('admin/adminEditProduct', {
                title : 'Editar Producto',
                product,
                categories, 
                subcategories,
                session: req.session
            })
        })
        })
        
    },
    update: (req, res) => {
        let errors = validationResult(req)
        if (req.fileValidatorError) {
            let image = {
                param: "image",
                msg: req.fileValidatorError,
            };
            errors.push(image);
        }
        if (errors.isEmpty()) { 
            let {
                name, 
                subcategoryId, 
                description,
                price,
                shipping,
                discount,
                } = req.body;
                db.Product.findOne({
                    where: {
                        id: req.params.id
                    }
                })
                .then(product => {
                    db.Product.update( {
                        name,
                        subcategoryId,
                        description,
                        price,
                        shipping,
                        discount,
                        image: req.file ? req.file.filename : product.image
                    },{
                        where: {
                            id: req.params.id
                        }
                    })
                    .then(() => {
                        res.redirect('/admin/products')
                    })
                })
        } else {
            const categoriesPromise = db.Category.findAll();
            const subcategoriesPromise = db.Subcategory.findAll();
            Promise.all([categoriesPromise, subcategoriesPromise])
            .then(([categories, subcategories]) => { 
                db.Product.findOne({
                    where: {
                        id: req.params.id
                    },
                    include: [
                        {association: 'subcategory',
                            include: [{association: 'category'}]}
                    ]
                })
                .then(product => {
                    res.render('admin/adminEditProduct', {
                        title : 'Editar Producto',
                        categories: product.subcategory.category, 
                        subcategories: product.subcategory,
                        product,
                        categories, 
                        subcategories,
                        errors: errors.mapped(),
                        old: req.body,
                        session: req.session
                    })
                })
            })
        
        }
    },
    remove: (req, res) => {
        db.Product.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(() => {
            res.redirect('/admin/products')
        })
    },
    usersView: (req, res) => {
        db.User.findAll({
            where: {
                rol: {
                    [Op.lt] : 3
                }
            }
        })
        .then(users => {
            res.render('admin/adminUsers', {
                users,
                session: req.session
            })
        })
    },
    userChangeAdmin: (req, res) => {
        db.User.update({
            rol: 1
        },
        {
            where: {
                id: req.params.id
            }
        })
        .then(() => {
            res.redirect('/admin/users')
        })
    },
    adminChangeUser: (req, res) => {
        db.User.update({
            rol: 0
        },
        {
            where: {
                id: req.params.id
            }
        })
        .then(() => {
            res.redirect('/admin/users')
        })
    },
}