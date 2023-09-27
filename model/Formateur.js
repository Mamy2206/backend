const { DataTypes, Sequelize } = require('sequelize')
const sequelize = require('../database/connection');





const Formateur = sequelize.define('Formateur', {
    id_formateur: {
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
});

module.exports = Formateur