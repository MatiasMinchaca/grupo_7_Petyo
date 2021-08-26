module.exports = {
    login : (req, res) => {
        res.render('user/login', {
            title : 'Iniciar sesión'
        })
    },
    register : (req, res) => {
        res.render('user/register', {
            title: 'Registrarse'
        })
    },
    editProfile : (req, res) => {
        res.render('user/editProfile', {
            title: 'Editar Perfil'
        })
    }
}