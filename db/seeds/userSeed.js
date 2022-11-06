const { User } = require('../../models');

// Seeds the User table first
const users = [
	{
		user_name: 'Admin',
		password: 'password1',
	},
	{
		user_name: 'Assistant',
		password: 'welcome1',
	},
];

const seedUsers = () => User.bulkCreate(users);
module.exports = seedUsers;
