const { products, categories, banners } = require('../data/dataBase');
const db = require('../database/models');
const { Op } = require('sequelize')



module.exports = {
  home : (req, res) => {
    let productsSlider = products.filter(product => product.discount >= 12)
      res.render('home', {
          title : 'Petyo petshop',
          productsSlider,
          categories,
          banners, 
          session: req.session
      })
  }
}