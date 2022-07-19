'use strict';

export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('task', {
    id: {
      type: Sequelize.STRING,
      primaryKey: true,
      autoIncrement: false,
      allowNull: false
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    completed: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      default: false
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: false
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: false
    }
  });
}
export async function down(queryInterface, Sequelize) {
  await queryInterface.dropTable('task');
}
