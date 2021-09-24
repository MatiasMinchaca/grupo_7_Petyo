module.exports = (req, res, next) =>{
    if(req.cookies.userPetyo){
        req.session.user = req.cookies.userPetyo
        res.locals.user = req.session.user
    }
    next()
}