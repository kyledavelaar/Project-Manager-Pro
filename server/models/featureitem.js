module.exports = (sequelize, DataTypes) => {
  const FeatureItem = sequelize.define('FeatureItem', {
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    complete: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  }, {
    classMethods: {
      associate: (models) => {
        FeatureItem.belongsTo(models.Feature, {
          foreignKey: 'featureId',
          onDelete: 'CASCADE',
        });
      },
    },
  });
  return FeatureItem;
};