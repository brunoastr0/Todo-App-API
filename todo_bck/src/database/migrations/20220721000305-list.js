'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.createTable("list",{
    id: {
      type: Sequelize.STRING,
      primaryKey: true,
      autoIncrement: false,
      allowNull: false
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: false
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: false
    }

   })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable("list")
  }
};
