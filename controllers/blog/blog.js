const router = require('express').Router();
const { User, Post, Comment } = require('../../models');
const auth = require('../../utils/auth');

router.get('/:id', auth, async (req, res) => {
	req.session.postId = req.params.id;
	try {
		const blogData = await Post.findByPk(req.params.id, {
			include: [
				{
					model: User,
					attributes: ['user_name'],
				},
				{
					model: Comment,
					include: [{ model: User, attributes: ['user_name'] }],
				},
			],
		});
		const blog = blogData.get({ plain: true });
		res.render('blogPage', {
			blog,
			loggedIn: req.session.loggedIn,
		});
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});

router.post('/add', auth, async (req, res) => {
	console.log("made it back");
	try {
		const createComment = await Comment.create({
			comment: req.body.commentText,
			// post_id: req.body.postId,
			post_id: req.session.postId,
			user_id: req.session.userId
		});
		res.status(200).json(createComment);
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});

module.exports = router;
