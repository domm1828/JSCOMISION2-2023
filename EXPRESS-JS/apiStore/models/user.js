'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    type_user: DataTypes.INTEGER,
    active: DataTypes.INTEGER,
    clients_id :{
      type:DataTypes.INTEGER,
      allowNull:false,
      references:{
        model:'clients',
        key:'id'
      }
    },
  }, {
    sequelize,
    modelName: 'user',
  });

  user.associate = function (models) {
    user.belongsTo(models.client);
  }

  return user;
};
