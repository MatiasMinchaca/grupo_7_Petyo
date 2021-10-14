module.exports = function(sequelize, dataTypes){
    let alias = "CartDetaild";
    let cols = {
        CartDetaild: {
            type: dataTypes.INTEGER(11).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        quantify: {
            type: dataTypes.INTEGER(11),
            allowNull: false
        },
        netPrice: {
            type: dataTypes.INTEGER(11),
            allowNull: false
        },
        cartId: {
            type: dataTypes.INTEGER(11),
            allowNull: false
        },
        productId: {
            type: dataTypes.INTEGER(11),
            allowNull: false
        }
    }
    
    let config = {
        tableName: "cartDetaild"
    }

    return CartDetaild
}