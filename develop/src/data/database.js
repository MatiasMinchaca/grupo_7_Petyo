const fs = require('fs');
const path = require('path');

module.exports = {
    products: JSON.parse(fs.readFileSync(path.join(__dirname, "/products.json"), "utf-8")),
    categories: JSON.parse(fs.readFileSync(path.join(__dirname, "/categories.json"), "utf-8")),
    ProductsJSON: (dataBase) => {
        fs.writeFileSync(path.join(__dirname, "../data/products.json"), JSON.stringify(dataBase), "utf-8")
    },
    users: JSON.parse(fs.readFileSync(path.join(__dirname, "/users.json"), "utf-8")),
    UsersJSON: (dataBase) => {
        fs.writeFileSync(path.join(__dirname, "../data/users.json"), JSON.stringify(dataBase), "utf-8")
    },
    banners: JSON.parse(fs.readFileSync(path.join(__dirname, "/banners.json"), "utf-8"))
}
