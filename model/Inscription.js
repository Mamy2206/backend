const { DataTypes, Sequelize } = require('sequelize')
const sequelize = require('../database/connection')


const Inscription = sequelize.define('inscriptions', {
    id_inscription: {
        autoIncrement:true,
        primaryKey: true,
        type: DataTypes.INTEGER(),
        allowNull: false,

    },
    id_user: {
        type: DataTypes.INTEGER(),
        allowNull:false,
    },
    id_formation: {
        type: DataTypes.INTEGER(),
        allowNull:false,
    },
    date_inscription: {
        type: DataTypes.DATE,
        allowNull:false,
    },
    createdAt: Sequelize.DATE(),
    updatedAt: Sequelize.DATE(),
})
module.exports = Inscription