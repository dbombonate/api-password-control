module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('stores',
      {
        store_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
        },
        store_name: {
          type: Sequelize.STRING,
          allowNull: false,
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
    await queryInterface.dropTable('stores');
  },
};
