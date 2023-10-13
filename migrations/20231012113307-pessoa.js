"use strict"

const { DataTypes } = require("sequelize")

module.exports = {
  up: async (
    /**  @type {import('sequelize').QueryInterface} */ queryInterface,
    _Sequelize,
  ) => {
    await queryInterface.createTable("pessoa", {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      nome: {
        type: DataTypes.STRING(72),
        allowNull: false,
      },
      sobrenome: {
        type: DataTypes.STRING(72),
        allowNull: false,
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
    await queryInterface.dropTable("pessoa")
  },
}
