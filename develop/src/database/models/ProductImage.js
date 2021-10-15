module.exports = function(sequelize, dataTypes){
    let alias = "ProductImage";
    let cols = {
        id: {
            type: dataTypes.INTEGER(11).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: dataTypes.STRING(150),
            allowNull: false
        },
        productId: {
            type: dataTypes.INTEGER(11),
            allowNull: false
        }
    }
    
    let config = {
        tableName: "products_images",
        timestamps: false
    }

    const ProductImage = sequelize.define(alias, cols, config)

    ProductImage.associate = models => {
        ProductImage.belongsTo(models.Product, {
            as: "products",
            foreignKey:"productId"
        })
    }

    return ProductImage
}