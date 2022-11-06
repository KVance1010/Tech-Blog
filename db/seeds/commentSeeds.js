const { Comment } = require('../../models');

// Seeds the Comment table last
const comments = [
	{
		comment: "really, that's it",
		user_id: 1,
		post_id: 1,
	},
];

const seedComments = () => Comment.bulkCreate(comments);
module.exports = seedComments;