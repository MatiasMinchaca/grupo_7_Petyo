module.exports = {
   
    detail : (req, res) => {
        res.render('productDetail', {
            title : 'Detalle de producto'
        })
    },
    cart : (req, res) => {
        res.render('shoppingCart', {
            title : 'Carrito'
        })
  }
}