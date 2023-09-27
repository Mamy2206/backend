'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('formateurs', {
      id_formateur: {
        autoIncrement:true,
        primaryKey: true,
        type: DataTypes.INTEGER,
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
        msg: "format email"
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
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('formateurs')
  }
};
