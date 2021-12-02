module.exports = function(sequelize, dataTypes){
    let alias = "Contact";
    let cols = {
        id: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        country: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        language: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        message: {
            type: dataTypes.STRING(500),
            allowNull: false
        },
        image: {
            type: dataTypes.STRING(150)
        },
        name: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        lastName: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        email: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        address: {
            type: dataTypes.STRING(70)
        },
        city: {
            type: dataTypes.STRING(70)
        },
        postalCode: {
            type: dataTypes.INTEGER(11)
        },
        contact: {
            type: dataTypes.STRING(50)
        }
    }
    
    let config = {
        tableName: "contacts",
        timestamps: false
    }

    const Contact = sequelize.define(alias, cols, config)

    return Contact
}