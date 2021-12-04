const db = require('../../database/models');


module.exports = {
    categories: (req,res) => {
        db.Category.findAll({
            include: [
                {association: 'subcategories'}
            ]
        })
        .then(resultado => {
            res.json(resultado)
        })
    },
    subcategories: (req,res) => {
        db.Category.findOne({
            where: {
                id: req.params.category
            },
            include: [
                {association: 'subcategories'}
            ]
        })
        .then(resultado => {
            res.json(resultado)
        })
    }
}