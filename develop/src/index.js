/* REQUIRES */
const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
let methodOverride = require('method-override');
const session = require('express-session');
const localsCheck = require('./middlewares/localsCheck');
const categoriesHeader = require('./middlewares/categoriesHeader');
const userHeader = require('./middlewares/userHeader');
/* PORT */
const port = 3000;

/* ROUTERS */
let homeRouter = require('./routers/homeRouter'); 
let productsRouter = require('./routers/productsRouter');
let usersRouter = require('./routers/usersRouter');
let adminRouter = require('./routers/adminRouter');
let contactRouter = require('./routers/contactRouter');
let apiProductsRouter = require('./routers/apiRoutes/apiProductsRouter');
let apiCategoriesRouter = require('./routers/apiRoutes/apiCategoriesRouter');
let otroRouter = require('./routers/otroRouter');

/* VIEWS */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

/* MIDDLEWARES */
app.use(express.static(path.join(__dirname, '../public')))
app.use(express.urlencoded({ extended : false })); /* Configurando el metodo POST */
app.use(express.json());
app.use(methodOverride('_method'));
app.use(cookieParser());
app.use(session({
    secret: "Petyo",
    resave: false,
    saveUninitialized: true
}));
app.use(categoriesHeader);
app.use(userHeader);
app.use(localsCheck);


/* ROUTES */
app.use('/', homeRouter);
app.use('/products', productsRouter);
app.use('/users', usersRouter);
app.use('/admin', adminRouter);
app.use('/contact', contactRouter);
app.use('/api/products', apiProductsRouter)
app.use('/api/categories', apiCategoriesRouter)
app.use('/otro', otroRouter);

app.use((req, res, next)=>{
    res.status(404).render('error404',{
        title: 'Error 404',
        messageError: 'La pagina solicitada no existe',
        session: req.session
    })
})

app.listen(port, () => {
    console.log(`Servidor funcionando en puerto ${port}\n http://localhost:${port}`)
})