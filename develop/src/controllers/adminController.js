const { validationResult } = require('express-validator');
const fs = require('fs')
const db = require('../database/models')
const { Op } = require('sequelize')

module.exports = {
    admin: (req, res) => {
        res.render('admin/adminDashboard', {
            title : 'Administrador',
            session: req.session
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
                subcategoryId, 
                description 
            } = req.body;
            db.Product.create({
                name,
                price, 
                discount, 
                category, 
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
}