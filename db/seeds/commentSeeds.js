const { Comment } = require('../../models');

// Seeds the Comment table last
const comments = [
	{
		comment: "really, that's it",
		user_id: 1,
		post_id: 1
	},
	{
		comment: "you should probably use them",
		user_id: 1,
		post_id: 2
	},
	{
		comment: "can not beat free",
		user_id: 2,
		post_id: 1
	},
	{
		comment: "Both are amazing",
		user_id: 2,
		post_id: 3
	},
	{
		comment: "use them",
		user_id: 3,
		post_id: 4
	},
	{
		comment: "agreed",
		user_id: 3,
		post_id: 5
	},
	{
		comment: "debatable",
		user_id: 3,
		post_id: 6
	},
];

const seedComments = () => Comment.bulkCreate(comments);
module.exports = seedComments;