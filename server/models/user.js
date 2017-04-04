module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('users', {
    username: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
    teamName: {
        type: DataTypes.STRING,
    },
  }, {
    // classMethods: {
    //   associate: (models) => {
    //     User.belongsToMany(models.User, {
    //       foreignKey: 'featureItemId',
    //       as: 'users',
    //     });
    //   },
    // },
  });
  return User;
}