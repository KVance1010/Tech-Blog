const sequelize = require('../../config/connection');
const seedUsers = require('./userSeed.js')
const seedPosts = require('./postSeed.js')
const seedComments = require('./commentSeeds.js')

const seedAll = async () => {
	await sequelize.sync({ force: true });
	await seedUsers();
	await seedPosts();
	await seedComments();
	process.exit(0);
};

seedAll();
