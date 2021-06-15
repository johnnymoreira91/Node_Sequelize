const {Model, DataTypes} = require('sequelize');

class Addresses extends Model {
  static init(sequelize) {
    super.init({
      zipcode: DataTypes.STRING,
      street: DataTypes.STRING,
      number: DataTypes.STRING,
      block: DataTypes.STRING,
      apartment: DataTypes.STRING
    }, {
      sequelize
    })
  }
  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' })
  }
}

module.exports = Addresses;