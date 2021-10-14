module.exports = function(sequelize, dataTypes){
    let alias = "User";
    let cols = {
        userId: {
            type: dataTypes.INTEGER(11).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: dataTypes.VARCHAR(50),
            allowNull: false
        },
        lastName: {
            type: dataTypes.VARCHAR(50),
            allowNull: false
        },
        telephone: {
            type: dataTypes.VARCHAR(40),
            allowNull: false
        },
        email: {
            type: dataTypes.VARCHAR(70),
            allowNull: false
        },
        password: {
            type: dataTypes.VARCHAR(70),
            allowNull: false
        },
        image: {
            type: dataTypes.VARCHAR(150),
            allowNull: false
        },
        biography: {
            type: dataTypes.VARCHAR(500),
            allowNull: false
        },
        rol: {
            type: dataTypes.INT(2),
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