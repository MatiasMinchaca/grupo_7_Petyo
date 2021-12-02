let db = require('../database/models')
module.exports = (req,res,next) => {
    if(req.session.user){
        db.User.findOne({
            where: {
                id: req.session.user.id
            },
            include: [{
                association: "address"
            }]
        })
        .then(user => {
            res.locals.user = user
        })
    }
    next()
}