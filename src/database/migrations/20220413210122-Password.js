module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('passwords', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
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
      dept_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'departments',
          key: 'id',
        },
        inDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      },
      password_called: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('passwords');
  },
};
