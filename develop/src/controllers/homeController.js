const { banners } = require('../data/dataBase');
const db = require('../database/models');
const { Op } = require('sequelize'); 



module.exports = {
  home : (req, res) => {
    db.Product.findAll({
      where: {
        discount: {
          [Op.gte] : 12
        }
      }
    })
    .then(products =>{
      res.render('home', {
          title : 'Petyo petshop',
          productsSlider: products,
          banners, 
          session: req.session
      })
    })
  }
}