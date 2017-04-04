module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('User', {
      username: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    }),
  down: (queryInterface /* , Sequelize */) =>
    queryInterface.dropTable('User'),
};