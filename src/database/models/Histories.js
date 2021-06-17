const {Model, DataTypes} = require('sequelize');

class Histories extends Model {
  static init(sequelize) {
    super.init({
      history: DataTypes.STRING,
    }, {
      sequelize
    })
  }
  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' })
  }
}

module.exports = Histories;