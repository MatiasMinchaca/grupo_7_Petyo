module.exports = {
  home : (req, res) => {
      res.render('home', {
          title : 'Petyo petshop'
      })
  }
}