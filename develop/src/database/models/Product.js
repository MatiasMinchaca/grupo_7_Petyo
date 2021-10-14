module.exports = function(sequelize, dataTypes){
    let alias = "Product";
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
        },
        price: {
            type: dataTypes.INTEGER(11),
            allowNull: false
        },
        discount: {
            type: dataTypes.INTEGER(11)
        },
        description: {
            type: dataTypes.VARCHAR(500)
        },
        image: {
            type: dataTypes.VARCHAR(150)
        },
        subcategoryId: {
            type: dataTypes.INTEGER(11),
            allowNull: false
        }
    }
    
    let config = {
        tableName: "products",
        timestamps: true
    }

    const Product = sequelize.define(alias, cols, config)

    Product.associate = models => {
        Product.belongsTo(models.Subcategory, {
            as: "subcategory",
            foreignKey: "subcategoryId"
        })
    }

    return Product
}