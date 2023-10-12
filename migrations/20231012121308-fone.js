'use strict'

const { DataTypes } = require('sequelize')

module.exports = {
  up: async (
    /**  @type {import('sequelize').QueryInterface} */ queryInterface,
    _Sequelize
  ) => {
    await queryInterface.createTable('fone', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      celular: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      numero: {
        type: DataTypes.STRING(72),
        allowNull: false,
        unique: true
      },
      codigo: {
        type: DataTypes.STRING(72),
        allowNull: false,
      },
      pessoa: {
        type: DataTypes.INTEGER,
        references: {
          model: 'pessoa',
          key: 'id',
        },
        unique: true,
        onDelete: 'cascade',
        onUpdate: 'cascade',
        allowNull: true,
      },
      
      created_at: {
        type: DataTypes.DATE,
      },
      updated_at: {
        type: DataTypes.DATE,
      },
    })
  },

  down: async (/** @type {QueryInterface} */ queryInterface, _Sequelize) => {
    await queryInterface.dropTable('fone')
  },
}
