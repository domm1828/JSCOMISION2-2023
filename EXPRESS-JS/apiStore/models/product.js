'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  product.init({
    code: DataTypes.STRING,
    name: DataTypes.STRING,
    description: {
      type:DataTypes.TEXT,
      set(value){
        this.setDataValue('description',value.toUpperCase())
      }
    },
    amount: DataTypes.FLOAT,
    stock: DataTypes.INTEGER,
    photo: {
     type:DataTypes.STRING,
     get(){
      return this.getDataValue('photo') ?  `http://localhost:4500/public/products/${this.getDataValue('photo')}` :'';
     }
    },
    total:{
      type: DataTypes.VIRTUAL(DataTypes.FLOAT,['amount','stock']),
      get(){
        return `${this.amount*this.stock}`
      }
    },
    totalUsd:{
      type: DataTypes.VIRTUAL(DataTypes.FLOAT,['amount','stock']),
      get(){
        return `${this.amount*this.stock*900}`
      }
    }

  }, {
    sequelize,
    modelName: 'product',
    paranoid:true
  });
  return product;
};