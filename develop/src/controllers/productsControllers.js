module.exports = {
   
    detail : (req, res) => {
        res.render('products/productDetail', {
            title : 'Detalle de producto'
        })
    },
    cart : (req, res) => {
        res.render('products/shoppingCart', {
            title : 'Carrito'
        })
  }
}