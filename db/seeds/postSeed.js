const {Post} = require('../../models');

// Seeds the Post table
const posts = [
	{
		title: 'Jaws Database',
		post: 'Setting up a Jaws Database in Heroku...',
		user_id: 1
	},
	{
		title: 'Why APIs are so important',
		post: 'lots of reasons',
		user_id: 1
	},
	{
		title: 'MySQL VS NoSQL',
		post: 'MySQL for banking and NoSQL for metadata',
		user_id: 2
	},
	{
		title: 'Sever Side APIs',
		post: 'Use them',
		user_id: 2
	},
	{
		title: 'Callbacks or Promises',
		post: 'Actually async await',
		user_id: 3
	},
	{
		title: 'Best language to code in',
		post: 'JavaScript... one stop shopping',
		user_id: 3
	}
];

const seedPosts = () => Post.bulkCreate(posts);
module.exports = seedPosts;