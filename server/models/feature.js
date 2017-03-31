module.exports = (sequelize, DataTypes) => {
  const Feature = sequelize.define('Feature', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    classMethods: {
      associate: (models) => {
        Feature.hasMany(models.FeatureItem, {
          foreignKey: 'featureId',
          as: 'featureItems',
        });
      },
    },
  });
  return Feature;
};