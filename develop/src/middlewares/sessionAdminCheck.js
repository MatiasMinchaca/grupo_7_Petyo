module.exports = (req, res, next) =>{
    if (req.session.user && req.session.user.rol === 1) {
        next()
    }else if(req.session.user && req.session.user.rol === 7){
        next()
    } else {
        res.redirect('/')
    }
}