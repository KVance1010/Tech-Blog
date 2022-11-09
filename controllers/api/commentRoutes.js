const router = require('express').Router();
const { Comment } = require('../../models');
const auth = require('../../utils/auth');

router.post('/', auth, async (req, res) => {
	try {
		const createComment = await Comment.create({
			comment: req.body.commentText,
			post_id: req.session.postId,
			user_id: req.session.userId
		});
		res.status(200).json(createComment);
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});

router.delete('/:id', auth, async (req, res) => {
	try {
		const deletedPost = await Comment.destroy({
			where: {
				id: req.params.id
			},
		});

		if (!deletedPost) {
			res.status(404).json({ message: 'No blog found with this id!' });
			return;
		}
		res.status(200).json(deletedPost);
	} catch (err) {
		res.status(500).json(err);
	}
});


module.exports = router;
