const { products, categories, ProductsJSON } = require('../data/dataBase');
const { validationResult } = require('express-validator');

let subcategories = [];
products.forEach(product => {
    if(!subcategories.includes(product.subcategory)){
        subcategories.push(product.subcategory)
    }  
});

module.exports = {
    admin : (req, res) => {
        res.render('admin/adminDashboard', {
            title : 'Administrador'
        })
    },
    products : (req, res) => {
        res.render('admin/adminListProducts', {
            title : 'Lista de productos',
            products
        })
    },
    load : (req, res) => {
        res.render('admin/adminLoadProduct', {
            title : 'Cargar Producto',
            categories,
            subcategories
        })
    },
    store: (req, res) => {
        let errors = validationResult(req)
        if (errors.isEmpty()) {
            let lastId = 1;

            products.forEach(product => {
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
    
            ProductsJSON(products)
    
            res.redirect('/admin/products')
        } else {
            res.render('admin/adminLoadProduct', {
                title : 'Cargar Producto',
                categories,
                subcategories,
                errors: errors.mapped(),
                old: req.body
            })
        }
       
    },
    edit: (req, res) => {
        let product = products.find(product => product.id === +req.params.id)
        res.render('admin/adminEditProduct', {
            title : 'Editar Producto',
            categories, 
            subcategories,
            product
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
            
            products.forEach( product => {
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
    
            ProductsJSON(products)
    
            res.redirect('/admin/products')
        } else {
        let product = products.find(product => product.id === +req.params.id)
        res.render('admin/adminEditProduct', {
            title : 'Editar Producto',
            categories, 
            subcategories,
            product,
            errors: errors.mapped(),
            old: req.body
        })
        }
    
    },
    remove: (req, res) => {
        products.forEach( product => {
            if(product.id === +req.params.id){
               let productRemove = products.indexOf(product);
               products.splice(productRemove, 1)
            }
        })
        
        ProductsJSON(products)

        res.redirect('/admin/products')
    }
}