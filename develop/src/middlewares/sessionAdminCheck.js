module.exports = (req, res, next) =>{
    if (req.session.user && req.session.user.role === "admin") {
        next()
    } else {
        res.redirect('/')
    }
}