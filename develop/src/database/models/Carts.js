module.exports = function(sequelize, dataTypes){
    let alias = "Carts";
    let cols = {
        productId: {
            type: dataTypes.INTEGER(11).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: dataTypes.VARCHAR(100),
            allowNull: false
        }
    }
    let config = {
        tableName: "Products",
        timestamps: true
    }

    const Carts = sequelize.define(alias, cols, config)

    Product.associate = models => {
        Product.belongsTo(models.Subcategories, {
            as: "subcategory",
            foreignKey: "subcategoryId"
        })
    }

    return Carts
}