module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('departments',
      {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        dept_name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        store_id: {
          type: Sequelize.INTEGER,
          allowNull: true,
          references: {
            model: 'stores',
            key: 'store_id',
          },
          inDelete: 'SET NULL',
          onUpdate: 'CASCADE',
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
    await queryInterface.dropTable('departments');
  },
};
