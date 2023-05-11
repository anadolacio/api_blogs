'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('posts_categories', {
      post_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        onDelete: 'CASCADE',
        OnUpdate: 'CASCADE',
      },
      category_id: { 
        type: Sequelize.INTEGER, 
        primaryKey: true,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    },
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('posts_categories');
  }
};
