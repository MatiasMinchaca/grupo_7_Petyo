const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'))
})
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/login.html'))
})
app.get('/loginConfirmation', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/loginConfirmation.html'))
})
app.get('/productDetail', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/productDetail.html'))
})
app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/register.html'))
})
app.get('/shoppingCart', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/shoppingCart.html'))
})

app.listen(port, () => {
    console.log(`Servidor funcionando en puerto ${port}\n http://localhost:${port}`)
})