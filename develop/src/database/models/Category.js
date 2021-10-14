module.exports = function(sequelize, dataTypes){
    let alias = "Category";
    let cols = {
        categorId: {
            type: dataTypes.INTEGER(11).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: dataTypes.VARCHAR(50),
            allowNull: false
        },
        image: {
            type: dataTypes.VARCHAR(150),
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
            as: "Subcategory",
            foreignKey: "categorId"
        })
    }

    return Category
}