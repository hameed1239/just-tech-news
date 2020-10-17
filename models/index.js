const User = require('./User');
const Post = require("./Post.js");

// create associations
User.hasMany(Post, {
    foreignKey: 'user_id'
  });

//Constraint a post belong to only one user
Post.belongsTo(User, {
    foreignKey: 'user_id',
  });

module.exports = { User, Post };