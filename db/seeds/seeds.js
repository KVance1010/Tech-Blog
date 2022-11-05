const sequelize = require('../../config/connection');
const { User, Post, Comment } = require('../../models');
const bcrypt = require('bcrypt');

// Seeds the User table first
const seedUsers = async() => {
	let users = [
		{
			user_name: 'Admin',
			password: 'password1'
		},
		{
			user_name: 'Assistant',
			password: 'welcome1'
		}
	];
	// users = users.forEach(async (user) => {
	// 	user.password = await bcrypt.hash(user.password, 8);
	// });
	await User.bulkCreate(users);
};

// Seeds the Post table
const seedPosts = async() => {
	const posts = [
		{
			title: 'Jaws Database',
			post: 'Setting up a Jaws Database in Heroku...',
			user_id: "1",
		},
		{
			title: 'Why APIs are so important',
			post: 'lots of reasons',
			user_id: "1",
		},
	];
	await Post.bulkCreate(posts);
};

// Seeds the Comment table last
const seedComments = async () => {
	const comments = [
		{
			comment: 'really, that\'s it',
			user_id: 1,
			post_id: 1,
		},
	];
	await Comment.bulkCreate(comments);
};

const seedAll = async () => {
	await sequelize.sync({ force: true });
	await seedUsers();
	await seedPosts();
	await seedComments();
	process.exit(0);
};

seedAll();
