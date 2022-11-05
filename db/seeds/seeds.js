const sequelize = require('../../config/connection');
const {User, Post, Comment} = require('../../models');

// Seeds the User table first
const seedUsers = () => {
    const users = [
        {}
    ]
    User.bulkCreate();
}

// Seeds the Post table
const seedPosts = () => {

    Post.bulkCreate();
}

// Seeds the Comment table last
const seedComments = () => {

    Comment.bulkCreate();
}


const seedAll = async () => {
    await sequelize.sync({ force: true });
  
    await seedUsers();
  
    await seedPosts();
    
    await seedComments();
    
    process.exit(0);
  };
  
  seedAll();