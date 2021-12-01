const { validationResult } = require('express-validator');
const fs = require('fs');
const db = require('../database/models');
const { Op } = require('sequelize');


module.exports = {
    categoriesListView: (req, res) =>{
        db.Category.findAll({
            include: [
                {association: 'subcategories'}
            ]
        })
        .then(categories =>{
            res.render('admin/adminListCategories', {
                title: 'Lista de categorias',
                categories,
                session: req.session
            })
        })
    },
    categoryLoadView: (req, res) =>{
        res.render('admin/adminLoadCategory', {
            title: 'Cargar Categoria',
            session: req.session
        })
    },
    categoryLoad: (req, res) =>{
        let errors = validationResult(req)
        if (req.fileValidatorError) {
            let image = {
                param: "image",
                msg: req.fileValidatorError,
            };
            errors.push(image);
        }
        if (errors.isEmpty()) {
            let{
                name
            } = req.body
            db.Category.create({
                name,
                image: req.file ? req.file.filename : ''
            })
            .then(() => {
                res.redirect('/admin/categories')
            }).catch(err => console.log(err))
        } else {
            res.redirect('/admin/categories/load', {
                title: 'Cargar Categoria',
                errors: errors.mapped(),
                old: req.body,
                session: req.session
            })
        }
    },
    categoryEditView: (req, res) =>{
        db.Category.findOne({
            where: {
                id: req.params.id
            },
            include: [
                {association: 'subcategories'}
            ]
        })
        .then(category =>{
            res.render('admin/adminEditCategory', {
                title: `Editar Categoria: ${category.name}`,
                category,
                session: req.session
            })
        })
    },
    categoryEdit: (req, res) => {
        let errors = validationResult(req)
        if (errors.isEmpty()) {
            let {
                name
            } = req.body
            db.Category.findOne({
                where: {
                    id: req.params.id
                }
            })
            .then(category => {
                db.Category.update({
                    name,
                    image: req.file ? req.file.filename : category.image
                },
                {
                    where: {
                        id: req.params.id
                    }
                })
            })
            .then(() => {
                res.redirect('/admin/categories')
            })
        } else {
            db.Category.findOne({
                where: {
                    id: req.params.id
                },
                include: [
                    {association: 'subcategories'}
                ]
            })
            .then(category => {
                res.render('admin/adminEditCategory', {
                    title: `Error al editar la Categoria: ${category.name}`,
                    errors: errors.mapped(),
                    old: req.body,
                    category,
                    session: req.session
                })
            })
        }
    },
    categoryRemove: (req, res) => {
        let wardImage = []
        db.Category.findOne({
            where: {
                id: req.params.id
            }
        })
        .then(category => {
            wardImage.push(category.image)
            db.Subcategory.findAll({
                where: {
                    categoryId: category.id
                }
            })
            .then(subcategories => {
                if(subcategories.length > 0){
                    subcategories.forEach(Subcategory => {
                    db.Product.destroy({
                        where: {
                            subcategoryId: Subcategory.id
                        }
                    })
                    .then(() => {
                        db.Subcategory.destroy({
                            where: {
                                categoryId: category.id
                            }
                        })
                        .then(() => {
                            db.Category.destroy({
                                where: {
                                    id: req.params.id
                                }
                            })
                            .then(() => {
                                if(wardImage != 'autoImage.png'){
                                    fs.unlinkSync('public/images/categories/' + wardImage)
                                }
                                res.redirect('/admin/categories')
                            })
                        })
                    })
                });
                }else{
                    db.Category.destroy({
                        where: {
                            id: req.params.id
                        }
                    })
                    .then(() => {
                        if(wardImage != 'autoImage.png'){
                            fs.unlinkSync('public/images/categories/' + wardImage)
                        }
                        res.redirect('/admin/categories')
                    })
                }
                
                    
            })
        })
    }
}