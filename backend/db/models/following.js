'use strict';
module.exports = (sequelize, DataTypes) => {
  const Following = sequelize.define('Following', {
    userId: DataTypes.INTEGER,
    followId: DataTypes.INTEGER
  }, {});
  Following.associate = function(models) {
    Following.belongsTo(models.User, { foreignKey: 'userId' });
    Following.belongsTo(models.User, { foreignKey: 'followId' });
  };
  return Following;
};