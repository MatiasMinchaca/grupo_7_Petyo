module.exports = {
    load : (req, res) => {
        res.render('admin/adminLoad', {
            title : 'Cargar Producto'
        })
    },
    admin : (req, res) => {
        res.render('admin/adminIndex', {
            title : 'Administrador'
        })
    },
    products : (req, res) => {
        res.render('admin/adminProducts', {
            title : 'Lista de productos'
        })
    },
  }