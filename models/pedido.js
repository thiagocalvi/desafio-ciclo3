'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pedido extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Pedido.belongsTo(models.Cliente, {
        foreignKey: 'ClienteId', as: 'clientes'
      });
      Pedido.belongsToMany(models.Servico, {
        foreignKey: 'ServicoId', through: 'ItemPedido', as: 'servicos_ped'
      });
      Pedido.hasMany(models.ItemPedido, {
        foreignKey: 'PedidoId', as: 'item_pedidos'
      })
    }
  };
  Pedido.init({
    ClienteId: DataTypes.INTEGER,
    dataPedido: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Pedido',
  });
  return Pedido;
};