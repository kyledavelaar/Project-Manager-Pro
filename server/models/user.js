module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    teamName: {
        type: DataTypes.STRING,
    },
  // }, {
  //   classMethods: {
  //     associate: (models) => {
  //       User.belongsToMany(models.FeatureItem, {
  //         foreignKey: 'featureItemId',
  //         as: 'users',
  //       });
  //     },
  //   },
  });
  return User;
}