/* REQUIRES */
const express = require('express');
const app = express();
const path = require('path');

/* PORT */
const port = 3000;

/* ROUTERS */
let homeRouter = require('./routers/homeRouter'); 
let productsRouter = require('./routers/productsRouter');
let usersRouter = require('./routers/usersRouter');

/* VIEWS */
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

/* MIDDLEWARES */
app.use(express.static(path.join(__dirname, '../public')))
app.use(express.urlencoded({ extended : false })); /* Configurando el metodo POST */
app.use(express.json()) 

/* ROUTES */
app.use('/', homeRouter);
app.use('/products', productsRouter);
app.use('/users', usersRouter);


app.listen(port, () => {
    console.log(`Servidor funcionando en puerto ${port}\n http://localhost:${port}`)
})