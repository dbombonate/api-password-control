import Sequelize, { Model } from 'sequelize';

export default class Store extends Model {
  static init(sequelize) {
    super.init({
      store_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      store_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    }, {
      sequelize,
    });
    return this;
  }

  static associate(models) {
    this.hasMany(models.Department, { foreignKey: 'store_id' });
  }
}
