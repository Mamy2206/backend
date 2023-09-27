const { DataTypes, Sequelize } = require('sequelize')
const sequelize = require('../database/connection')




const Formation = sequelize.define('Formation', {
    id_formation: {
        autoIncrement:true,
        primaryKey: true,
        type: DataTypes.INTEGER(),
        allowNull: false,

    }, 
    formateurId: {
        type: DataTypes.INTEGER(),
        allowNull: false,

    },
    nom: {
        type: DataTypes.STRING(30),
        allowNull:false,
    },
    date_debut: {
        type: DataTypes.DATE,
        allowNull:false,
    },
    date_fin: {
        type: DataTypes.DATE,
        allowNull:false,
    }, 
    description: {
        type: DataTypes.STRING(255),
        allowNull:false,
    },
    createdAt: Sequelize.DATE(),
    updatedAt: Sequelize.DATE(),
});
module.exports = Formation