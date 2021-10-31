'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ItemCompras', {
      CompraId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          models: 'compras',
          key: 'id'
        },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
      },
      ProdutoId: {
        primaryKey: true,
        allowNull: false,
        references: {
          models: 'produtos',
          key: 'id'
        },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
      },
      quantidade: {
        type: Sequelize.INTEGER
      },
      valor: {
        type: Sequelize.FLOAT
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('ItemCompras');
  }
};