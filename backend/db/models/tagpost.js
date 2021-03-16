'use strict';
module.exports = (sequelize, DataTypes) => {
  const TagPost = sequelize.define('TagPost', {
    tagId: DataTypes.INTEGER,
    postId: DataTypes.INTEGER
  }, {});
  TagPost.associate = function(models) {
    // associations can be defined here
  };
  return TagPost;
};