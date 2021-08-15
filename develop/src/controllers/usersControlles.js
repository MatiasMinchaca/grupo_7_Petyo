module.exports = {
    login : (req, res) => {
        res.render('login', {
            title : 'Iniciar sesión'
        })
    },
    confirmation : (req, res)=> {
        res.render('loginConfirmation', {
            title : 'Confirmar cuenta'
        })
    },
    register : (req, res) => {
        res.render('register', {
            title: 'Registrarse'
        })
    }
}