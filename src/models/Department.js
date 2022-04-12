import Sequelize, { Model } from 'sequelize';

export default class Department extends Model {
  static init(sequelize) {
    super.init({
      dept_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    }, {
      sequelize,
    });
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Store, { foreignKey: 'store_id' });
  }
}
