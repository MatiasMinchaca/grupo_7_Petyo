const { validationResult } = require('express-validator');
let bcrypt = require('bcryptjs');
const db = require('../database/models');


module.exports = {
    login: (req, res) => {
        res.render('user/login', {
            title: 'Iniciar sesión',
            session: req.session,
        });
    },
    register: (req, res) => {
        res.render('user/register', {
            title: 'Registrarse',
            session: req.session,
        });
    },
    profile: (req, res) => {
        db.User.findByPk(req.session.user.id).then((user) => {
            db.Address.findOne({
                where: {
                    userId: user.id,
                },
            }).then((address) => {
                res.render('user/profile', {
                    title: 'Mi Perfil',
                    user,
                    address,
                    session: req.session,
                });
            });
        });
    },
    editProfile: (req, res) => {
        db.User.findByPk(req.params.id).then((user) => {
            db.Address.findOne({
                where: {
                    userId: user.id,
                },
            }).then((address) => {
                res.render('user/editProfile', {
                    title: 'Editar Perfil',
                    user,
                    session: req.session,
                    address
                });
            });
        });
    },
    profileUpdate: (req, res) => {
        let errors = validationResult(req);

        if (errors.isEmpty()) {
            let { name, lastName, address, pc, city, province, telephone, email, image, biography } = req.body;
            db.User.update(
                {
                    name,
                    lastName,
                    telephone,
                    email,
                    image,
                    biography,
                },
                {
                    where: {
                        id: req.params.id,
                    },
                }
            ).then((result) => {
                db.Address.create({
                    street: address,
                    city: city,
                    province: province,
                    postalCode: pc,
                    userId: req.params.id,
                }).then((result) => {
                    res.redirect("/users/profile");
                });
            });
        } else {
            res.render('users/editProfile', {
                title: 'Editar Perfil',
                errors: errors.mapped(),
                old: req.body,
                session: req.session,
            });
        }
    },
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
                });
        } else {
            res.render('user/login', {
                title: 'Iniciar sesión',
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
            let { name, lastName, email, namePet, password } = req.body

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
            }).catch(err => console.log(err));
        } else {
            res.render('user/register', {
                title: 'Registrarse',
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