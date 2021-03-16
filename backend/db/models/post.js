'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    userId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    body: DataTypes.TEXT,
    urlContent: DataTypes.STRING,
    type: DataTypes.INTEGER,
    tags: DataTypes.STRING
  }, {});
  Post.associate = function(models) {
    // associations can be defined here
    Post.belongsTo(models.User, { foreignKey: "userId" });
  };
  return Post;
};