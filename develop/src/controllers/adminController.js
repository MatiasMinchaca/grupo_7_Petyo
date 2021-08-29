const { products, categories, writeProductsJSON } = require('../data/dataBase');

let subcategories = [];
products.forEach(product => {
    if(!subcategories.includes(product.subcategory)){
        subcategories.push(product.subcategory)
    }  
});

module.exports = {
    admin : (req, res) => {
        res.render('admin/adminIndex', {
            title : 'Administrador'
        })
    },
    products : (req, res) => {
        res.render('admin/adminProducts', {
            title : 'Lista de productos',
            products
        })
    },
    load : (req, res) => {
        res.render('admin/adminLoad', {
            title : 'Cargar Producto',
            categories,
            subcategories
        })
    },
    store: (req, res) => {
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
            image: req.file ? "/products/"+req.file.filename : "default-image.png"
        };

        products.push(newProduct);

        writeProductsJSON(products)

        res.redirect('/admin/products')
    },
    edit: (req, res) => {
        let product = products.find(product => product.id === +req.params.id)
        res.render('admin/adminEdit', {
            title : 'Editar Producto',
            categories, 
            subcategories,
            product
        })
    },
    update: (req, res) => {
        
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
                product.image = req.file ? [req.file.filename] : product.image
            }
        })

        writeProductsJSON(products)

        res.redirect('/admin/products')
    },
    remove: (req, res) => {
        products.forEach( product => {
            if(product.id === +req.params.id){
               let productRemove = products.indexOf(product);
               products.splice(productRemove, 1)
            }
        })
        
        writeProductsJSON(products)

        res.redirect('/admin/products')
    }
  }