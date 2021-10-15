module.exports = function(sequelize, dataTypes){
    let alias = "User";
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
        lastName: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        telephone: {
            type: dataTypes.STRING(40),
            allowNull: false
        },
        email: {
            type: dataTypes.STRING(70),
            allowNull: false
        },
        password: {
            type: dataTypes.STRING(70),
            allowNull: false
        },
        image: {
            type: dataTypes.STRING(150),
            allowNull: false
        },
        biography: {
            type: dataTypes.STRING(500),
            allowNull: false
        },
        rol: {
            type: dataTypes.INTEGER(2),
            allowNull: false
        }
    }
    
    let config = {
        tableName: "Users",
        timestamps: true
    }

    const User = sequelize.define(alias, cols, config)

    User.associate = models => {
        User.hasMany(models.Address, {
            as: "addresses",
            foreignKey: "userId"
        })
    }

    return User
}