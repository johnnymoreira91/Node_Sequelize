const {Model, DataTypes} = require('sequelize');

class Insurance extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
    }, {
      sequelize,
      tableName: 'insurance'
    })
  }
  static associate(models) {
   this.belongsToMany(models.User, { foreignKey: 'insurance_id', through: 'user_insurance', as: 'users'})
  }
}

module.exports = Insurance;