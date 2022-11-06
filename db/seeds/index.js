const sequelize = require('../../config/connection');
const seedUsers = require('./postSeed.js')
const seedPosts = require('./userSeed.js')
const seedComments = require('./commentSeeds.js')

const seedAll = async () => {
	await sequelize.sync({ force: true });
	await seedUsers();
	await seedPosts();
	await seedComments();
	process.exit(0);
};

seedAll();
