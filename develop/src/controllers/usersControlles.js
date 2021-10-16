/*const { products, categories, ProductsJSON, users, UsersJSON } = require('../data/dataBase')*/
const { validationResult } = require('express-validator')
let bcrypt = require('bcryptjs')
const db = require('../database/models')


module.exports = {
    login: (req, res) => {
        res.render('user/login', {
            title: 'Iniciar sesión',
            /*categories,*/
            session: req.session
        })
    },
    register: (req, res) => {
        res.render('user/register', {
            title: 'Registrarse',
            /*categories,*/
            session: req.session
        })
    },
    profile: (req, res) => {
        let user = users.find(user => user.id === req.session.user.id)

        res.render('user/profile', {
            title: 'Mi Perfil',
            user,
            /*categories,*/
            session: req.session
        })
    },
    editProfile: (req, res) => {
        let user = users.find(user => user.id === +req.params.id)
        res.render('user/editProfile', {
            title: 'Editar Perfil',
            user,
            /*categories,*/
            session: req.session
        })
    },
    profileUpdate: (req, res) => {
        let errors = validationResult(req)

        if (errors.isEmpty()) {
            let user = users.find(user => user.id === +req.params.id)

            let {
                name,
                last_name,
                tel,
                namePet,
                biography,
                address,
                pc,
                province,
                city
            } = req.body

            user.name = name
            user.last_name = last_name
            user.tel = tel
            user.namePet = namePet
            user.biography = biography
            user.address = address
            user.pc = pc
            user.province = province
            user.city = city
            user.image = req.file ? req.file.filename : user.image

            UsersJSON(users)

            delete user.password

            req.session.user = user

            res.redirect('/users/profile')

        } else {
            res.render('users/editProfile', {
                title: 'Editar Perfil',
                /*categories,*/
                errors: errors.mapped(),
                old: req.body,
                session: req.session
            })

        }
    }
    ,
    procedureLogin: (req, res) => {

        let errors = validationResult(req)
        if (errors.isEmpty()) {
            db.User.findOne({
                where: {
                    email: req.body.email
                }
            })
                .then(user => {
                    req.session.user = {
                        id: user.id,
                        name: user.name,
                        lastName: user.lastName,
                        namePet: user.namePet,
                        email: user.email,
                        image: user.image,
                        rol: user.rol
                    };

                    if (req.body.remember) {
                        res.cookie("userPetyo", req.session.user, { expires: new Date(Date.now() + 900000), httpOnly: true });
                    }

                    res.locals.user = req.session.user;

                res.redirect('/');
        })
        /*let errors = validationResult(req)

        if (errors.isEmpty()) {
            let user = users.find(user => user.email === req.body.email)

            req.session.user = {
                id: user.id,
                name: user.name,
                last_name: user.last_name,
                namePet: user.namePet,
                email: user.email,
                image: user.image,
                role: user.role
            }

            if(req.body.remember){
                res.cookie("userPetyo", req.session.user, {expires: new Date(Date.now() + 900000), httpOnly : true})
            }

            res.locals.user = req.session.user

            res.redirect('/')*/
        } else {
            res.render('user/login', {
                title: 'Iniciar sesión',
                /*categories,*/
                errors: errors.mapped(),
                session: req.session,
            })
        }
    },
    procedureRegister: (req, res) => {
        let errors = validationResult(req)
        if (req.fileValidatorError) {
            let image = {
                param: "image",
                msg: req.fileValidatorError,
            };
            errors.push(image);
        }

        if (errors.isEmpty()) {
            let { name, lastName, email, namePet, password} = req.body

            db.User.create({
                name,
                lastName,
                email,
                namePet,
                telephone: "",
                biography: "",
                password: bcrypt.hashSync(password, 12),
                image: req.file ? req.file.filename : "autoImage.png",
                rol: 0,
            }).then(() => {
                res.redirect('/users/login')
            }).catch(err => console.log(err))

            /*let lastId = 0;

            users.forEach(user => {
                if (user.id > lastId) {
                    lastId = user.id
                }
            })

            let {
                name,
                last_name,
                email,
                namePet,
                pass
            } = req.body

            let newUser = {
                id: lastId + 1,
                name,
                last_name,
                email,
                namePet,
                pass: bcrypt.hashSync(pass, 12),
                image: req.file ? req.file.filename : "autoImage.png",
                biography: "",
                role: "user",
                tel: "",
                address: "",
                pc: "",
                province: "",
                city: ""
            }

            users.push(newUser)

            UsersJSON(users)

            res.redirect('/users/login')*/

        } else {
            res.render('user/register', {
                title: 'Registrarse',
                /*categories,*/
                errors: errors.mapped(),
                old: req.body,
                session: req.session
            })
        }
    },
    logout: (req, res) => {
        req.session.destroy()
        if (req.cookies.userPetyo) {
            res.cookie('userPetyo', '', { maxAge: -1 })
        }

        res.redirect('/')
    }
}