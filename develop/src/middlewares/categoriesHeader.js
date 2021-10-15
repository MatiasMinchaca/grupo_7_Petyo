let db = require('../database/models')
module.exports = (req,res,next) => {
    db.Category.findAll({
        include: [{
            association: "subcategories"
        }]
    })
    .then(categories => {
        /* res.send(categories) */
        res.locals.categories = categories
        next()
    })
}