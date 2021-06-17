const {Model, DataTypes} = require('sequelize');

class User extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING
    }, {
      sequelize
    })
  }
  static associate(models) {
    this.hasMany(models.Addresses, { foreignKey: 'user_id', as: 'addresses' });
    this.belongsToMany(models.Insurance, { foreignKey: 'user_id', through: 'user_insurance', as: 'insurance'});
    this.hasMany(models.Histories, { foreignKey: 'user_id', as: 'histories' });
  }
}

module.exports = User;