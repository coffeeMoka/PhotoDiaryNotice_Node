'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    const now = new Date();
    await queryInterface.createTable('LoginUsers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "ScrapingTargetLists", key: "siteId" }
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: now
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: now
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('LoginUsers');
  }
};