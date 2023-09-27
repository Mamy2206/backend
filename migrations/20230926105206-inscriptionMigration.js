'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('inscriptions', {
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
   
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('inscriptions')
  }
};
