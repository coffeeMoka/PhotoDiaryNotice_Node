'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const now = new Date();
     await queryInterface.bulkInsert('LoginUsers', [{
        name: 'test',
        password: 'test',
        createdAt: now,
        updatedAt: now
      }], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('LoginUsers', null, {});
  }
};
