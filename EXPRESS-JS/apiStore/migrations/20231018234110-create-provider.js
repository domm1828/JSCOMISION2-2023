'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('providers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cuit: {
        unique:true,
        type: Sequelize.STRING(45)
      },
      business_name: {
        type: Sequelize.STRING(45)
      },
      email: {
        type: Sequelize.STRING(45)
      },
      phone: {
        type: Sequelize.STRING(45)
      },
      address: {
        type: Sequelize.STRING(45)
      },
      code_postal: {
        type: Sequelize.STRING(10)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('providers');
  }
};