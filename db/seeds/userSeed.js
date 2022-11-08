const { User } = require('../../models');

// Seeds the User table first
const users = [
	{
		user_name: 'Admin',
		password: 'password1',
	},
	{
		user_name: 'Assistant1',
		password: 'welcome1',
	},
	{
		user_name: 'john123',
		password: 'welcome1',
	},
	{
		user_name: 'sammy',
		password: 'welcome1',
	},
	{
		user_name: 'Roger',
		password: 'welcome1',
	},
	{
		user_name: 'Frank_h',
		password: 'welcome1',
	},
	{
		user_name: 'robertP',
		password: 'welcome1',
	},
	{
		user_name: 'kv',
		password: 'welcome1',
	},
];

const seedUsers = () => User.bulkCreate(users);
module.exports = seedUsers;
