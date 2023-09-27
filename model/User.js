const { DataTypes, Sequelize } = require('sequelize')
const sequelize = require('../database/connection')


const User = sequelize.define('User', {
    id_user: {
        autoIncrement:true,
        primaryKey: true,
        type: DataTypes.INTEGER(),
        allowNull: false,

    },
    nom: {
        type: DataTypes.STRING(30),
        allowNull:false,
    },
    email: {
        type: DataTypes.STRING(30),
        allowNull:false,
        validate:{
          isEmail: true,
        }
    },
    password: {
        type: DataTypes.STRING(30),
        allowNull:false,
        validate:{
            len:[5,12]
        }
    },
    createdAt: Sequelize.DATE(),
    updatedAt: Sequelize.DATE(),
})
module.exports = User