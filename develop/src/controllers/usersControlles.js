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
        db.User.findOne({
            where: {
                id: req.session.user.id
            }
        })
        .then(user => {
            db.Address.findAll({
                where: {
                    UserId: user.id
                }
            })
            .then(address => {
                res.render('user/profile', {
                    title: 'Mi Perfil',
                    user,
                    address,
                    session: req.session
                }) 
            })
        })
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
                    address,
                });
            });
        });
    },
    profileUpdate: (req, res) => {
        let errors = validationResult(req);

        if (errors.isEmpty()) {
            let { 
                name, 
                lastName, 
                namePet, 
                telephone, 
                email,
                biography
        } = req.body;
        db.User.findOne({
            where: {
                id: req.params.id
            }
        })
        .then(user => {
            db.User.update(
            {
                name,
                lastName,
                telephone,
                namePet,
                email,
                image: req.file ? req.file.filename : user.image,
                biography,
            },
            {
                where: {
                    id: user.id,
                },
            }
        ).then(() => {
                res.redirect("/users/profile");
            });
        })
        } else {
            res.render('user/editProfile', {
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
                        telephone: user.telephone,
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
        if (errors.isEmpty()) {
            let {
                name, 
                lastName, 
                email, 
                namePet, 
                password 
            } = req.body
            db.User.create({
                name,
                lastName,
                email,
                namePet,
                telephone: '',
                biography : '',
                password: bcrypt.hashSync(password, 12),
                image: "autoImage.png",
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
    },
    addAddressView: (req,res) =>{
        db.User.findOne({
            where: {
                id: req.params.id
            }
        })
        .then(user => {
            res.render('user/addAddress', {
                title: 'Agregar nueva Dirección',
                user,
                session: req.session
            })
        })
    },
    addAddress: (req,res) =>{
        let errors = validationResult(req)
        if(errors.isEmpty()){
            let {
                street,
                number,
                floorOrApartament,
                province,
                city,
                postalCode
            } = req.body
            db.User.findOne({
                where: {
                    id: req.params.id
                }
            })
            .then(user => {
                db.Address.create({
                    street,
                    number,
                    floorOrApartament,
                    province,
                    city,
                    postalCode,
                    userId: user.id
                })
                .then(() => {
                    res.redirect('/users/profile')
                })
            })
        }else{
            db.User.findOne({
                where: {
                    id: req.params.id
                }
            })
            .then(user => {
                res.render('user/addAddress', {
                    title: 'Agregar nueva Dirección',
                    user,
                    errors: errors.mapped(),
                    old: req.body,
                    session: req.session
                })
            })
        }
    },
    editAddressView: (req,res) =>{
            db.Address.findOne({
                where: {
                    id: req.params.id
                }
            })
            .then(address => {
                res.render('user/editAddress', {
                    title: 'Editar Dirección',
                    address,
                    session: req.session
                })
            })
    },
    editAddress: (req,res) =>{
        let errors = validationResult(req)
        if (errors.isEmpty()) {
            let {
                street,
                number,
                floorOrApartament,
                province,
                city,
                postalCode
            } = req.body
            db.Address.update(
                {
                    street,
                    number,
                    floorOrApartament,
                    province,
                    city,
                    postalCode
                },
                {
                    where: {
                        id: req.params.id
                    }
                }
            )
            .then(() => {
                res.redirect('/users/profile')
            })
        } else {
            db.Address.findOne({
                where: {
                    id: req.params.id
                }
            })
            .then(address => {
                res.render('user/editAddress', {
                    title: 'Editar Dirección',
                    address,
                    errors: errors.mapped(),
                    old: req.body,
                    session: req.session
                })
            })
        }
    },
    removeAddress: (req,res) =>{
        db.Address.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(() => {
            res.redirect('/users/profile')
        }).catch(err => console.log(err))
    },
    cart : (req, res) => {
        res.render('user/shoppingCart', {
            title : 'Carrito',
            session: req.session
        })
    },
}