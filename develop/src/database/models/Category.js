module.exports = function(sequelize, dataTypes){
    let alias = "Category";
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
        image: {
            type: dataTypes.STRING(150),
            allowNull: false
        }
    }
    
    let config = {
        tableName: "Categories",
        timestamps: true
    }

    const Category = sequelize.define(alias, cols, config)

    Category.associate = models => {
        Category.hasMany(models.Subcategory, {
            as: "subcategories",
            foreignKey: "categoryId"
        })
    }

    return Category
}