module.exports = function(sequelize, dataTypes){
    let alias = "Cart";
    let cols = {
        cartId: {
            type: dataTypes.INTEGER(11).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        userId: {
            type: dataTypes.INTEGER(11),
            allowNull: false
        }
    }
    
    let config = {
        tableName: "Carts",
        date: true
    }

    return Cart
}