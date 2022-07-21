'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('task', 'listId', 
    {
      type: Sequelize.STRING,
      references: { model: 'list', key: 'id' }

    }
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('task', 'listId')
  }
};
