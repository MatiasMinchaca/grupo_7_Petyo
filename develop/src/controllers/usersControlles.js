module.exports = {
    login : (req, res) => {
        res.render('user/login', {
            title : 'Iniciar sesión'
        })
    },
    confirmation : (req, res)=> {
        res.render('user/loginConfirmation', {
            title : 'Confirmar cuenta'
        })
    },
    register : (req, res) => {
        res.render('user/register', {
            title: 'Registrarse'
        })
    }
}