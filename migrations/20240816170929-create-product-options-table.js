'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('product_options', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      product_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'products',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      shape: {
        type: Sequelize.ENUM('square', 'circle'),
        defaultValue: 'square',
      },
      radius: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      type: {
        type: Sequelize.ENUM('text', 'color'),
        defaultValue: 'text',
      },
      values: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('now'),
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('now'),
      },
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('product_options');
  },
};