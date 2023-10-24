'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
        unique:true,
        allowNull:false,
        type: Sequelize.STRING(45)
      },
      password: {
        type: Sequelize.TEXT
      },
      active: {
        type: Sequelize.INTEGER
      },
      type_user: {
        type: Sequelize.INTEGER,
        allowNull:false,
      },
      clients_id: {
        type: Sequelize.INTEGER,
        references:{
          model:'clients',
          key:'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deletedAt: { 
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};