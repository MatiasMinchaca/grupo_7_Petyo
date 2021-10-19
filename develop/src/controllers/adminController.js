const { validationResult } = require('express-validator');
const fs = require('fs')
const db = require('../database/models')

module.exports = {
    admin: (req, res) => {
        res.render('admin/adminDashboard', {
            title : 'Administrador',
            session: req.session
        })
    },
    products: (req, res) => {
        db.Products.findAll()
        .then(products => {
            res.render('admin/adminListProducts', {
                title : 'Lista de productos',
                products,
                session: req.session
            })
        })
    },
    searchAdmin: (req, res) => {
        let search = req.query.searchAdmin.toLowerCase()

        let product = products.filter(product => 
            product.name.toLowerCase() == search || product.subcategory.toLowerCase() == search || product.category == search || product.price == search|| product.id == search
        );
        res.render('admin/searchAdmin',{
            title : `Tu busqueda;${search}`,
            search,
            product,
            session: req.session
        })
    },
    load : (req, res) => {
        res.render('admin/adminLoadProduct', {
            title : 'Cargar Producto',
            categories,
            subcategories,
            session: req.session
        })
    },
    store: (req, res) => {
        let errors = validationResult(req)
        if (errors.isEmpty()) {
            let lastId = 1;

            db.products.forEach(product => {
                if(product.id > lastId){
                    lastId = product.id
                }
            })
    
            let {
                name, 
                category, 
                subcategory, 
                description,
                price,
                discount,
                } = req.body;
    
            let newProduct = {
                id: lastId + 1,
                name,
                category,
                subcategory,
                description,
                price,
                discount,
                image: req.file ? "/products/"+req.file.filename : ""
            };
    
            products.push(newProduct);
    
            writeProductsJSON(products)
    
            res.redirect('/admin/products')
        } else {
            res.render('admin/adminLoadProduct', {
                title : 'Cargar Producto',
                categories,
                subcategories,
                errors: errors.mapped(),
                old: req.body,
                session: req.session
            })
        }
       
    },
    edit: (req, res) => {
        /*let product = products.find(product => product.id === +req.params.id)
        res.render('admin/adminEditProduct', {
            title : 'Editar Producto',
            product,
            session: req.session
        })*/
        db.Products.findByPk(req.params.id)
        .then(product => {
            res.render('admin/adminEditProduct', {
                title : 'Editar Producto',
                product,
                session: req.session
            })
        })
    },
    update: (req, res) => {
        let errors = validationResult(req)
        if (errors.isEmpty()) {
            let {
                name,    
                category, 
                subcategory, 
                description,
                price,
                discount,
                } = req.body;
            
            db.products.forEach( product => {
                if(product.id === +req.params.id){
                    product.id = product.id,
                    product.name = name,
                    product.category = category,
                    product.subcategory = subcategory,
                    product.description = description,
                    product.price = price,
                    product.discount = discount,
                    product.image = req.file ? "/products/"+req.file.filename : product.image
                }
            })
    
            ProductsJSON(products);
    
        res.redirect('/admin/products')

        } else {
        let product = products.find(product => product.id === +req.params.id)

        res.render('admin/adminEditProduct', {
            title : 'Editar Producto',
            categories, 
            subcategories,
            product,
            errors: errors.mapped(),
            old: req.body,
            session: req.session
        })
        }
    
    },
    remove: (req, res) => {
        db.products.forEach(product => {
            if (product.id === +req.params.id) {
                fs.existsSync("./public/images/productos/", product.image[0])
                ? fs.unlinkSync("./public/images/productos/" + product.image[0])
                : console.log("-- No se encontró")
                let productRemove = products.indexOf(product);
                products.splice(productRemove, 1)
            }
        })
        
        ProductsJSON(products);

        res.redirect('/admin/products')
    }
}