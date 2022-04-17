import Sequelize, { Model } from 'sequelize';

export default class Password extends Model {
  static init(sequelize) {
    super.init({
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      password_status: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      password_priority: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      password_called: {
        type: Sequelize.DATE,
        allowNull: true,
      },
    }, {
      sequelize,
    });
    return this;
  }

  static associate(models) {
    this.hasOne(models.Department, { foreignKey: 'id' });
  }
}
