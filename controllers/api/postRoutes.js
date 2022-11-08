const router = require('express').Router();
const auth = require('../../utils/auth');
const { Post } = require('../../models');

router.post('/', auth, async (req, res) => {
	try {
		const createComment = await Post.create({
			title: req.body.blogTitle,
			post: req.body.blogPost,
			user_id: req.session.userId,
		});
		res.status(200).json(createComment);
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});

router.delete('/:id', auth, async (req, res) => {
	try {
		const deletedPost = await Project.destroy({
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
