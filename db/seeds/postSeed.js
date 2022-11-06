const {Post} = require('../../models');

// Seeds the Post table
const posts = [
	{
		title: 'Jaws Database',
		post: 'Setting up a Jaws Database in Heroku...',
		user_id: 1,
	},
	{
		title: 'Why APIs are so important',
		post: 'lots of reasons',
		user_id: 1,
	},
];

const seedPosts = () => Post.bulkCreate(posts);
module.exports = seedPosts;