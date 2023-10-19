'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class details_providers_product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  details_providers_product.init({
    provider_id: DataTypes.INTEGER,
    products_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'details_providers_product',
  });
  return details_providers_product;
};