module.exports = (req, res, netx) =>{
    if(req.session.user){
        res.locals.user = req.session.user
    }
    netx()
}