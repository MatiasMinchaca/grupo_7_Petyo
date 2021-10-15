module.exports = function(sequelize, dataTypes){
    let alias = "Subcategory";
    let cols = {
        id: {
            type: dataTypes.INTEGER(11).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        categoryId: {
            type: dataTypes.INTEGER(11),
            allowNull: false
        }
    }
    
    let config = {
        tableName: "subcategories",
        timestamps: true
    }

    const subcategory = sequelize.define(alias, cols, config)

    subcategory.associate = models => {
        subcategory.belongsTo(models.Category, {
            as: "category",
            foreignKey: "categoryId"
        })
        subcategory.hasMany(models.Product, {
            as: "products",
            foreignKey:"subcategoryId"
        })
    }

    return subcategory
}