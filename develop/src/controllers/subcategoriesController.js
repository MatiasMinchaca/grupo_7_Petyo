const { validationResult } = require('express-validator');
const fs = require('fs');
const db = require('../database/models');
const { Op } = require('sequelize');

module.exports = {
    subcategoriesListView: (req, res) =>{
        db.Subcategory.findAll({
            include: [
                {association: 'category'}
            ]
        })
        .then(subcategories =>{
            res.render('admin/adminListSubcategories', {
                title: 'Lista de categorias',
                subcategories,
                session: req.session
            })
        })
    },
    subcategoryLoadView: (req, res) =>{
        res.render('admin/adminloadSubcategory', {
            title: 'Cargar Subcategoria',
            session: req.session
        })
    },
    subcategoryLoad: (req, res) =>{
        let errors = validationResult(req)
        if (errors.isEmpty()) {
            let {
                category,
                name
            } = req.body
            db.Subcategory.create({
                categoryId: category,
                name
            })
            .then(() => {
                res.redirect('/admin/subcategories')
            })
        } else {
            res.redirect('/admin/subcategories/load', {
                title: 'Cargar Subcategoria',
                errors: errors.mapped(),
                old: req.body,
                session: req.session
            })
        }
    },
    subcategoryEditView: (req, res) =>{
        db.Subcategory.findOne({
            where: {
                id: req.params.id
            },
            include: [
                {association: 'category'}
            ]
        })
        .then(subcategory =>{
            res.render('admin/adminEditSubcategory', {
                title: `Editar Subategoria: ${subcategory.name}`,
                subcategory,
                session: req.session
            })
        })
    },
    subcategoryEdit: (req, res) => {
        let errors = validationResult(req)
        if (errors.isEmpty()) {
            let {
                category,
                name
            } = req.body
            db.Subcategory.update({
                categoryId: category,
                name
            },
            { 
                where: {
                    id: req.params.id
                }}
            )
            .then(() => {
                res.redirect('/admin/subcategories')
            })
        } else {
            db.Subcategory.findOne({
                where: {
                    id: req.params.id
                },
                include: [
                    {association: 'category'}
                ]
            })
            .then(subcategory =>{
                res.render('admin/adminListSubcategories', {
                    title: `Error al editar la subcategoria: ${subcategory.name}`,
                    subcategory,
                    errors: errors.mapped(),
                    old: req.body,
                    session: req.session
                })
            })
        }
    },
    subcategoryRemove: (req, res) => {
        db.Subcategory.findOne({
            where: {
                id: req.params.id
            }
        })
        .then(subcategory => {
            db.Product.destroy({
                where: {
                    subcategoryId: subcategory.id
                }
            })
            .then(() => {
                db.Subcategory.destroy({
                    where: {
                        id: req.params.id
                    }
                })
                .then(() => {
                    res.redirect('/admin/subcategories')
                })
            })
        })
    }
}